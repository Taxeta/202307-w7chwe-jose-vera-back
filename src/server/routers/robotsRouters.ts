import cors from "cors";
import express from "express";
import { getRobots } from "../robotsControllers/robotsControllers.js";

const robotsRouter = express.Router();

const corsGetOptions = {
  origin: true,
  methods: "GET",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

robotsRouter.get("/", cors(corsGetOptions), getRobots);

export default robotsRouter;
