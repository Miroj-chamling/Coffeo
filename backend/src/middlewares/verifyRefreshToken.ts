import jwt  from 'jsonwebtoken';
import { Request, NextFunction } from "express";
import logger from "../utils/logger.js";
import { env } from '../utils/env.js';

export const verifyRefreshToken = (req: Request,next: NextFunction) =>
{
    try {
        const refreshToken = req.cookies.rtoken;
        if(!refreshToken)
        {
            return logger.error("refresh token expired");
        }
        jwt.verify(refreshToken, env.JWT_REFRESH_SECRET);
        next();
    } catch (error) {
        logger.error(error)   
    }

}