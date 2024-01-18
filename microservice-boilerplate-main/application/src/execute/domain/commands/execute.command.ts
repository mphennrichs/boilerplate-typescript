import { ExecuteRequestBody } from '@/execute/application/controllers/execute-request-body';

export class ExecuteCommand {
  constructor(public readonly params: ExecuteRequestBody) {}
}
