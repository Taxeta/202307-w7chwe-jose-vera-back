import { type NextFunction, type Request, type Response } from "express";
import CustomError from "./CustomError.js";

export const endpointNotFound = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  const newCustomError = new CustomError(
    "Error, robot not found",
    404,
    "Error, robot not found",
  );

  next(newCustomError);
};

export const generalErrorHandler = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errorMessage = error.message ?? "Error";
  const errorStatusCode = error.statusCode ?? 500;

  res.status(errorStatusCode).json({ error: errorMessage });
};
