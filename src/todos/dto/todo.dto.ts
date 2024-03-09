import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  priority: number;

  @IsOptional()
  @IsString()
  category?: string;
}
