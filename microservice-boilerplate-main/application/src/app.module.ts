import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import {
  BaseHttpExceptionFilter,
  CaptureHeadersMiddleware,
  PagaleveHttpModule,
  SentryInterceptor,
} from '@pagaleve/shared-backend-library';

import { ExecuteController } from '@/execute/application/controllers/execute.controller';
import { ExecuteCommandHandler } from '@/execute/domain/commands/execute-command.handler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PagaleveHttpModule,
  ],
  controllers: [ExecuteController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: BaseHttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useValue: new SentryInterceptor(),
    },
    ExecuteCommandHandler,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CaptureHeadersMiddleware).forRoutes('*');
  }
}
