import { RefreshTokenModel } from './../models/userModel/refreshTokenModel.js';
import mongoose from "mongoose";
import { env } from "../utils/env.js";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URL);
    logger.info(`mongo db connected successfully: ${conn.connection.host}`);

    RefreshTokenModel.collection.createIndex({ "expiresIn": 1 }, { expireAfterSeconds: 0 });


  } catch (error: unknown) {
    if(error instanceof Error)
    {
        logger.error(`Error: ${error.message}`);
        process.exit();
    }
  }
};

export default connectDB;
