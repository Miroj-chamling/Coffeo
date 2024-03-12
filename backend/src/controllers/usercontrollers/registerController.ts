import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler"

import { userRegisterValidate } from "../../zod/auth/userRegister_validate_schema.js";
import { UserModel } from "../../models/userModel/userModel.js";
import ErrorHandler from "../../utils/errorHandler.js";
import logger from "../../utils/logger.js";
import { sendActivationTokenEmail } from "../../libs/email_send/send_email.js";
import { getActivationToken } from "../../libs/token_generation/generate_activation_token.js";



export const test = asyncHandler(async(req, res)=>{
    res.send("hello world")
})

export const registerUser = asyncHandler(async(req:Request,res:Response, next:NextFunction) => 
{
    const {username, email, password} = req.body;

    try {
        const zodValidatedData = userRegisterValidate.parse(req.body);
        logger.info(zodValidatedData);

    } catch (error: unknown) {
        if(error instanceof Error){
            logger.info(error.message)
        }
    }

    const usernameExists = await UserModel.findOne({username});

    if(usernameExists){
        return next(new ErrorHandler(false, "Username already taken!", 409));
    }

    const emailExists = await UserModel.findOne({email});

    if(emailExists)
    {
       return next(new ErrorHandler(false, "Email already exists", 409));
    }

    const user = await UserModel.create({
        username, 
        email,
        password,
    })

    if(user)
    {
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email, 
            password: user.password,
        })
    }
    else{
        res.status(400).json({
            message: "user not created"
        });
    }

    const activationToken = await getActivationToken(email);

    logger.info(activationToken)

    sendActivationTokenEmail({email, subject: "Activate Your Account", activationToken})

})