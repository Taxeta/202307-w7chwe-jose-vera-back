import cors from "cors";
import express from "express";
import {
  createRobot,
  getRobots,
} from "../robotsControllers/robotsControllers.js";

const robotsRouter = express.Router();

const corsGetOptions = {
  origin: true,
  methods: "GET",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const corsPostOptions = {
  origin: true,
  methods: "POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

robotsRouter.get("/", cors(corsGetOptions), getRobots);

robotsRouter.post("/create", cors(corsPostOptions), createRobot);

export default robotsRouter;
