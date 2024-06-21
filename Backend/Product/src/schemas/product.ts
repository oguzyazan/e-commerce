import { Schema, Document, ObjectId, model } from "mongoose";

export interface IProduct extends Document {
  Name: string;
  Description: string;
  CategoryId: ObjectId;
  BrandId: ObjectId;
  Price: number;
  IsDeleted: boolean;
  CreationTime: Date;
  CreatorId: ObjectId;
}

const ProductSchema: Schema = new Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  CategoryId: { type: Schema.Types.ObjectId },
  BrandId: { type: Schema.Types.ObjectId },
  Price: { type: Number, required: true },
  IsDeleted: { type: Boolean, default: false },
  CreationTime: { type: Date, default: new Date() },
  CreatorId: { type: Schema.Types.ObjectId },
});

export default model<IProduct>("Product", ProductSchema);
