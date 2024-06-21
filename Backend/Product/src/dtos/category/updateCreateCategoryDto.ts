import { ObjectId } from "mongoose";

export default interface UpdateCreateCategoryDto {
  Name: string;
  ParentCategoryId: ObjectId;
}
