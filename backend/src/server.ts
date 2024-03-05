import express from "express";
import cors from "cors";

import userRouter from "./routes/userRoutes.js"

const app = express();

app.use(express.json());

const PORT = 3000;

app.use(cors());

app.use("/api/user", userRouter);



app.listen(PORT, () => {
  console.log("Server started!");
});
