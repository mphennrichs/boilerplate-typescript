import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  CaptureHeadersMiddleware,
  PagaleveHttpModule,
} from '@pagaleve/shared-backend-library';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PagaleveHttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppTestModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CaptureHeadersMiddleware).forRoutes('*');
  }
}
