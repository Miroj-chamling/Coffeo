import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler.js";
import logger from "../utils/logger.js";


export const errorHandleMiddleware = (
    err:ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction,
) =>{
    // err.message = err.message || "500 Internal server Error";
    // err.statusCode = err.statusCode ;
    // err.success = err.success || false;
    
    logger.error(err)

    return res.status(err.statusCode).json(
        {
            success: err.success ||"false",
            message: err.message ||"500 Internal server Error!",
            statusCode: err.statusCode || 500,
            field: err.field
        }
    )
}