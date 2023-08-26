import { Schema, model } from "mongoose";
import { type RobotStructure } from "../type.js";

const robotSchema = new Schema<RobotStructure>({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  speed: {
    type: Number,
    require: true,
  },
  resistance: {
    type: Number,
    require: true,
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
