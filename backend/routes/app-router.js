import { Router } from "express";
import userRoutes from "./user-router.js";

const appRouter = Router();

appRouter.use("/user", userRoutes);
