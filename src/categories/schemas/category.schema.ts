import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, ObjectId} from 'mongoose';

@Schema()
export class Category {
  _id: ObjectId;

  @Prop()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
export type CategoryDocument = HydratedDocument<Category>;
