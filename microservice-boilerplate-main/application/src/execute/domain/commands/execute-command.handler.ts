import { Injectable } from '@nestjs/common';

import { ExecuteCommand } from './execute.command';

Injectable();
export class ExecuteCommandHandler {
  async execute({ params }: ExecuteCommand): Promise<ExecuteCommand> {
    const model = new ExecuteCommand(params);

    return model;
  }
}
