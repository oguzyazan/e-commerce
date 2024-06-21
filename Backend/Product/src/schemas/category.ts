import { Schema, Document, ObjectId, model } from "mongoose";

export interface ICategory extends Document {
  Name: string;
  ParentCategoryId: ObjectId;
  IsDeleted: boolean;
  CreationTime: Date;
  CreatorId: ObjectId;
}

const CategorySchema: Schema = new Schema({
  Name: { type: String, required: true },
  ParentCategoryId: { type: Schema.Types.ObjectId },
  IsDeleted: { type: Boolean, default: false },
  CreationTime: { type: Date, default: new Date() },
  CreatorId: { type: Schema.Types.ObjectId },
});

export default model<ICategory>("Category", CategorySchema);
