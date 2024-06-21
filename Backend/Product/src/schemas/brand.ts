import {model, Schema, Document} from "mongoose";

export interface IBrand extends Document{
    Name: string,
    IsDeleted: boolean,
    CreationTime: Date,
    CreatorId: Schema.Types.ObjectId
}

const BrandSchema: Schema = new Schema({
    Name: { type: String, required: true },
    IsDeleted: { type: Boolean, default: false },
    CreationTime: { type: Date, default: new Date() },
    CreatorId: { type: Schema.Types.ObjectId }
});

export default model<IBrand>("Brand", BrandSchema)