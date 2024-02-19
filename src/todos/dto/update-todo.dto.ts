import {IsBoolean, IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  priority?: number;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
