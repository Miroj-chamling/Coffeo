import { Document } from "mongoose";

export interface RefreshTokenType extends Document
{
    email: string,
    token: string,
    expiresIn: Date,
}