import crypto from "crypto";
import { AccountActivationModel } from "../../models/authmodel/account_activation_model.js";
import logger from "../../utils/logger.js";


export const getActivationToken= async(email: string)=>
{
    const activationToken = crypto.randomBytes(32).toString('hex');

    console.log(activationToken)

    const expires = new Date(new Date().getTime() + 3600 * 1000 );

    try {
            await AccountActivationModel.findOneAndDelete({email})

            await AccountActivationModel.create ({
                email,
                activationToken, 
                expires
            })

            return activationToken;

    } catch (error) {
           logger.error(error); 
    }

}