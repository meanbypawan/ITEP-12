import express from "express";
import { signUp, signIn, fetch } from "../controller/user.controller.js";
import { auth } from "../middleware/Auth.js";
const router = express.Router();

// http://localhost:3000/user ---> POST
// {username,email,password}
router.post("/",signUp);
router.post("/sign-in",signIn);

router.get("/fruit-list",auth,fetch);
export default router;