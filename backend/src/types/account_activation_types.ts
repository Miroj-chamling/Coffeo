import { Document } from "mongoose";

export interface AccountActivateType extends Document
{
    email : string;
    activationToken: string;
    expires: Date;
}