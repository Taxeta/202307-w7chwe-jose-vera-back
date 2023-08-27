import mongoose from "mongoose";
import { type RobotStructure } from "../database/type.js";

const mockId = new mongoose.Types.ObjectId().toString();
const mockId2 = new mongoose.Types.ObjectId().toString();

export const mockRobots: RobotStructure[] = [
  {
    _id: mockId,
    name: "words destructor",
    image: "https://i.ytimg.com/vi/PFPIaU3ESOw/maxresdefault.jpg",
    speed: 9,
    resistance: 5,
  },
  {
    _id: mockId2,
    name: "robot smasher",
    image:
      "https://amcnetworks.es/wp-content/uploads/2018/09/Battlebots_Blaze.jpg",
    speed: 6,
    resistance: 9,
  },
  {
    _id: new mongoose.Types.ObjectId().toString(),
    name: "scrap burner",
    image:
      "https://media-assets.wired.it/photos/615efe35b16785978efa6af9/16:9/w_1…",
    speed: 6,
    resistance: 8,
  },
];
