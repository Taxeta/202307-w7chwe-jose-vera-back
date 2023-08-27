import mongoose from "mongoose";
import { type RobotStructure } from "../database/type.js";

const mockId = new mongoose.Types.ObjectId().toString();
const mockId2 = new mongoose.Types.ObjectId().toString();

export const mockRobots: RobotStructure[] = [
  {
    _id: mockId,
    name: "world destroyer",
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

export const createdRobotMock: Omit<RobotStructure, "_id"> = {
  name: "world destroyer",
  image: "https://i.ytimg.com/vi/PFPIaU3ESOw/maxresdefault.jpg",
  speed: 9,
  resistance: 5,
};

export const newMock: Omit<RobotStructure, "_id"> = {
  image:
    "https://imagenes.elpais.com/resizer/ZhJcHmvOspntSX3BFGtH6ydMYTo=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/JJ4IRQRGSRY3XOSLAZEUJ3P4SE.jpg",
  name: "freefaier",
  resistance: 4,
  speed: 10,
};
