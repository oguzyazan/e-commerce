import { ObjectId } from "mongoose";

export default interface UpdateCreateProductDto {
  Name: string;
  Description: string;
  CategoryId: ObjectId;
  BrandId: ObjectId;
  Price: Number;
}
