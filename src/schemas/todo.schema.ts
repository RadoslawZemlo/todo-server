import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

@Schema({timestamps: true})
export class Todo {
  _id: string;

  @Prop()
  description: string;

  @Prop()
  priority: number;

  @Prop()
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

export type TodoDocument = HydratedDocument<Todo>;
