import express from "express";

import { registerUser,test } from "../controllers/usercontrollers/registerController.js";

const router = express.Router();

router.route("/").get(test)
router.route("/register").post(registerUser);

export default router;

