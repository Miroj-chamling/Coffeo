import { Schema, Model, model } from "mongoose";
import { UserModelType } from "../types/user_types.js";


const userModelSchema: Schema<UserModelType> = new Schema<UserModelType>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    emailActivated: { type: Date },
    refreshToken: { type: String },
    role: { type: String, default: 'user', required: true },
})

export const UserModel: Model<UserModelType> = model<UserModelType> ("User", userModelSchema);