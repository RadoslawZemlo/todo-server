import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class Todo {
  @Prop()
  task: string;

  @Prop()
  priority: number;

  @Prop()
  created: string;

  @Prop()
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);