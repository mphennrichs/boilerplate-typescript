import { IsOptional } from 'class-validator';

export class ExecuteRequestBody {
  @IsOptional()
  execute?: boolean;
}
