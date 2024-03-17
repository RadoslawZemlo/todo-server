import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, ObjectId, Schema as MSchema} from 'mongoose';
import {Category} from '../../categories/schemas/category.schema';

@Schema({timestamps: true})
export class Todo {
  _id: ObjectId;

  @Prop()
  description: string;

  @Prop()
  priority: number;

  @Prop()
  completed: boolean;

  @Prop({type: MSchema.Types.ObjectId, ref: Category.name})
  category?: ObjectId;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
export type TodoDocument = HydratedDocument<Todo>;
