import mongoose from "mongoose";
import { env } from "../utils/env.js";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URL);
    logger.info(`mongo db connected successfully: ${conn.connection.host}`);
  } catch (error: unknown) {
    if(error instanceof Error)
    {
        logger.error(`Error: ${error.message}`);
        process.exit();
    }
  }
};

export default connectDB;
