import { Request, Response } from "express";

export const registerUser = (req:Request,res:Response):void => 
{
    const {email, password} = req.body;

    if(email && password)
    {
        res.status(200).json({message: "User created Successfully"});
    }
};