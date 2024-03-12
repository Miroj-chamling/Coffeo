import { AccountActivateType } from './../../types/account_activation_types.js';
import {Model, Schema, model} from "mongoose"

const AccountActivationSchema: Schema<AccountActivateType> = new Schema<AccountActivateType> ({
    email: {type: String, unique: true, required: true},
    activationToken: {type: String, required: true},
    expires: {type:Date,required: true},
},
    {
        timestamps: true,
    }

)

export const AccountActivationModel: Model<AccountActivateType> = model<AccountActivateType>("AccountActivationTable", AccountActivationSchema);