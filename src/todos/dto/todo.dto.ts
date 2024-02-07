import {IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  @IsString()
  task: string;

  @IsNotEmpty()
  @IsNumber()
  priority: number;

  @IsNotEmpty()
  @IsString()
  created: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}