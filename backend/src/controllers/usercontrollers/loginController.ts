import { Request, Response, NextFunction } from "express";
import asyncHandler from 'express-async-handler';
import { UserModel } from "../../models/userModel/userModel.js";


export const loginUser = asyncHandler(async(req: Request, res: Response)=>{
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields!");
      }

     const user = await UserModel.findOne({email});

      const isPassword = await user?.checkPassword(password);

      if(user && isPassword)
      {
        res.json({
            name:user.baseModelName,
        })
      }

})