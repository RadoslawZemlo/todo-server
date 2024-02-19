import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  priority: number;
}
