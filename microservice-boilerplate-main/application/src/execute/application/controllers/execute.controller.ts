import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  LoggerInterceptor,
  PagaLeveController,
} from '@pagaleve/shared-backend-library';

import { ExecuteRequestBody } from '@/execute/application/controllers/execute-request-body';
import { ExecuteCommand } from '@/execute/domain/commands/execute.command';
import { ExecuteCommandHandler } from '@/execute/domain/commands/execute-command.handler';

@ApiTags('execute')
@Controller('/handler')
@UseInterceptors(LoggerInterceptor, ClassSerializerInterceptor)
export class ExecuteController extends PagaLeveController {
  constructor(private readonly executeCommandHandler: ExecuteCommandHandler) {
    super();
  }

  @ApiBody({ type: ExecuteRequestBody })
  @Post('/execute')
  async CreateExecute(
    @Body() request: ExecuteRequestBody,
  ): Promise<ExecuteCommand> {
    const command = new ExecuteCommand(request);

    const response = await this.executeCommandHandler.execute(command);

    return response;
  }
}
