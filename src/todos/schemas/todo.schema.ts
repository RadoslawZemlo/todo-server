import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Schema as MSchema} from 'mongoose';

@Schema({timestamps: true})
export class Todo {
  _id: string;

  @Prop()
  description: string;

  @Prop()
  priority: number;

  @Prop()
  completed: boolean;

  @Prop({type: MSchema.Types.String, ref: 'Category'})
  category?: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
export type TodoDocument = HydratedDocument<Todo>;
