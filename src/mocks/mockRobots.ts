import mongoose from "mongoose";
import { type RobotStructure } from "../database/type.js";

const mockId = new mongoose.Types.ObjectId().toString();

export const mockRobots: RobotStructure[] = [
  {
    _id: mockId,
    name: "words destructor",
    image: "https://i.ytimg.com/vi/PFPIaU3ESOw/maxresdefault.jpg",
    speed: 9,
    resistance: 5,
  },
  {
    _id: new mongoose.Types.ObjectId().toString(),
    name: "robot smasher",
    image:
      "https://amcnetworks.es/wp-content/uploads/2018/09/Battlebots_Blaze.jpg",
    speed: 6,
    resistance: 9,
  },
];
