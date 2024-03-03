import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world fuck youu!");
});

app.get("/fuck", (req, res) => {
  res.send("this is just a test fuckers!!");
});

app.listen(PORT, () => {
  console.log("Server started!");
});
