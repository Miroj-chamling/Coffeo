import express, {Express} from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
export const app: Express= express();

import userRouter from "../routes/userRoutes.js"

app.use(express.json());

app.use(cors(
  {
    credentials: true,
  },
));

app.use(bodyParser.json())
app.use(cookieParser())
app.use(compression())


app.use("/api/user", userRouter);