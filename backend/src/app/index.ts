import express, {Express} from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
export const app: Express= express();

import userRouter from "../routes/userRoutes.js"
import connectDB from "../config/db.js";

app.use(express.json({limit: "50mb"}));
connectDB();


app.use(cors(
  {
    credentials: true,
  },
));

app.use(bodyParser.json())
app.use(cookieParser())
app.use(compression())


app.use("/api/user", userRouter);