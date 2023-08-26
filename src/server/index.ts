import express from "express";
import morgan from "morgan";
import {
  endpointNotFound,
  generalErrorHandler,
} from "../middlewares/errorHandlers.js";
import { pingController } from "./controllers/pingController.js";
import robotsRouter from "./routers/robotsRouters.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingController);

app.use("/robots", robotsRouter);
app.use(generalErrorHandler);
app.use(endpointNotFound);

export default app;
