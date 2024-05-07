import { Request, Response, NextFunction, response } from "express";
import asyncHandler from 'express-async-handler';
import { UserModel } from "../../models/userModel/userModel.js";
import logger from "../../utils/logger.js";
import { RefreshTokenModel } from "../../models/userModel/refreshTokenModel.js";
import ErrorHandler from "../../utils/errorHandler.js";


export const loginUser = asyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    try {
      const {email, password} = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields!");
      }

     const user = await UserModel.findOne({email});

     const isPassword = await user?.checkPassword(password);


      if(user && isPassword)
      {
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        logger.info("access token"+ accessToken, "refresh token"+ refreshToken)

        // res.cookie("access token : ", accessToken, {expires: new Date(Date.now() + 15 * 60 * 1000), httpOnly: true});
        // res.cookie("refresh token: ", refreshToken, {expires: new Date(Date.now() + 15 * 60 * 1000), httpOnly: true});

        await RefreshTokenModel.create(
          {
            email,
            token: refreshToken,
            expiresIn: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          }
        )

        res.json({
            name:user.username,
            token : accessToken,
            rtoken: refreshToken,
            message: "logged in successfully",
        })
      }else
      {
        return next(new ErrorHandler(false, "Email Or Password didn't match", 400, "login error"))
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }

})

export const refreshAccessToken = (req: Request)=>
{
  try {
    const {refreshToken} = req.cookies.rtoken;
    if(!refreshToken )
    {
      logger.info("refresh token expired")
    }
    
  } catch (error) {
    logger.error(error)
  }
}