export interface RobotStructure {
  name: string;
  image: string;
  speed: number;
  resistance: number;
}

export interface RobotId extends RobotStructure {
  _id: string;
}
