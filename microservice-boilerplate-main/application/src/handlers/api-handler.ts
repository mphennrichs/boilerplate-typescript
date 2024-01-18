import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { CustomLogger } from '@pagaleve/shared-backend-library';
import * as Sentry from '@sentry/serverless';
import serverlessExpress from '@vendia/serverless-express';
import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import AWSXRay from 'aws-xray-sdk';
import express from 'express';
import httpContext from 'express-http-context';
import http from 'http';
import https from 'https';

import { AppModule } from '@/app.module';

AWSXRay.captureHTTPsGlobal(http);
AWSXRay.captureHTTPsGlobal(https);

Sentry.AWSLambda.init({
  environment: process.env.STAGE,
  dsn: process.env.SENTRY_DSN_URL,
  tracesSampleRate: parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE),
});

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();
    expressApp.use(httpContext.middleware);
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
      {
        logger: new CustomLogger(),
      },
    );

    nestApp.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    nestApp.enableCors();

    await nestApp.init();

    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer;
}

export const handler = Sentry.AWSLambda.wrapHandler(
  async (event: APIGatewayEvent, context: Context, callback: any) => {
    const server = await bootstrap();
    return server(event, context, callback);
  },
  {},
);
