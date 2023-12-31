import cors from "cors";
import express from "express";
import morgan from "morgan";
import {
  endpointNotFound,
  generalErrorHandler,
} from "../middlewares/errorHandlers.js";
import { pingController } from "./controllers/pingController.js";
import robotsRouter from "./routers/robotsRouters.js";

const app = express();

const corsOptions = {
  origin: true,
  methods: "GET, POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.get("/", pingController);

app.use("/robots", robotsRouter);
app.use(generalErrorHandler);
app.use(endpointNotFound);

export default app;
