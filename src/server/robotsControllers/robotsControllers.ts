import { type NextFunction, type Request, type Response } from "express";
import Robot from "../../database/models/Robot.js";
import { type RobotStructure } from "../../database/type.js";
import CustomError from "../../middlewares/CustomError.js";

export const getRobots = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const robots = await Robot.find().exec();

    res.status(200).json({ robots });
  } catch (error: unknown) {
    const customError = new CustomError(
      "Can't retrieve robots",
      500,
      (error as Error).message,
    );

    next(customError);
  }
};

export const createRobot = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    RobotStructure
  >,
  res: Response,
  next: NextFunction,
) => {
  const robot = req.body;

  try {
    const newRobot = await Robot.create(robot);

    res.status(201).json({ robot: newRobot });
  } catch (error: unknown) {
    const customError = new CustomError(
      "Can't create the robot",
      400,
      (error as Error).message,
    );

    next(customError);
  }
};
