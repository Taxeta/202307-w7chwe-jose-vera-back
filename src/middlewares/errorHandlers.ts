import { type NextFunction, type Request, type Response } from "express";
import type CustomError from "./CustomError";

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

export const endpointNotFound = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorNotFound = res.status(404).json({ error: "Endpoint not found" });

  next(errorNotFound);
};
