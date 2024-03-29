import express from "express";

import { registerUser,test } from "../controllers/usercontrollers/registerController.js";
import { loginUser } from "../controllers/usercontrollers/loginController.js";

const router = express.Router();

router.route("/").get(test)
router.route("/register").post(registerUser);
router.route("/login").post(loginUser)

export default router;

