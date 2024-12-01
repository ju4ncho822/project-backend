import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], required: true })
  description: string[];

  @Prop({ required: true })
  imgUrl: string;

  @Prop({ required: true })
  amazonPrice: string;

  @Prop({ required: true })
  amazonLink: string;

  @Prop({ required: true })
  compuGamerPrice: string;

  @Prop({ required: true })
  compuGamerLink: string;

  @Prop({ required: true })
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
