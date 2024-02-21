import { Router } from "express";
import {
  userLogin,
  userSignup,
  verifyUser,
} from "../controllers/user-controllers";
import { verifyToken } from "../utils/token-manager";

const userRoutes = Router();

userRoutes.post("/login", userLogin);
userRoutes.post("/register", userSignup);
userRoutes.get("auth-status", verifyToken, verifyUser);
