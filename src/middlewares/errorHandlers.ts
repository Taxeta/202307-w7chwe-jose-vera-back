import { type NextFunction, type Request, type Response } from "express";
import CustomError from "./CustomError.js";

export const endpointNotFound = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  const newCustomError = new CustomError(
    "Error, robots not found",
    404,
    "error, robots not found",
  );

  next(newCustomError);
};

export const generalErrorHandler = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errorMessage = error.message ?? "Error, robot not found";
  const errorStatusCode = error.statusCode ?? 500;

  res.status(errorStatusCode).json({ error: errorMessage });
};
