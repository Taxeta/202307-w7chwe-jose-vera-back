import express from "express";
import { getRobots } from "../robotsControllers/robotsControllers.js";

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);

export default robotsRouter;
