import { Schema, Model, model } from "mongoose";
import bcrypt from "bcrypt";

import { UserModelType } from "../types/user_types.js";


const userModelSchema: Schema<UserModelType> = new Schema<UserModelType>({
   username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    emailActivated: { type: Date },
    refreshToken: { type: String },
    role: { type: String, default: 'user', required: true },
},  {
    timestamps: true,
})

userModelSchema.pre("save", async function (next) {
    if(!this.isModified)
    {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})

export const UserModel: Model<UserModelType> = model<UserModelType> ("User", userModelSchema);