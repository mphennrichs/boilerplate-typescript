import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import {
  BaseHttpExceptionFilter,
  CaptureHeadersMiddleware,
  HttpInternalCommunicationService,
  PagaleveHttpModule,
  SentryInterceptor,
} from '@pagaleve/shared-backend-library';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PagaleveHttpModule],
  providers: [
    HttpInternalCommunicationService,
    {
      provide: APP_FILTER,
      useClass: BaseHttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useValue: new SentryInterceptor(),
    },
  ],
  exports: [HttpInternalCommunicationService],
})
export class BoilerplateServiceSharedAppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CaptureHeadersMiddleware).forRoutes('*');
  }
}
