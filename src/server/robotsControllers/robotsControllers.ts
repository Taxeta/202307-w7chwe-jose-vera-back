import { type NextFunction, type Request, type Response } from "express";
import Robot from "../../database/models/Robot.js";
import CustomError from "../../middlewares/CustomError.js";

export const getRobots = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
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
