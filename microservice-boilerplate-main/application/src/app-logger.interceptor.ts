import { Injectable } from '@nestjs/common';
import { LoggerInterceptor } from '@pagaleve/shared-backend-library';

@Injectable()
export class AppLoggerInterceptor extends LoggerInterceptor {}
