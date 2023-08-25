import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError";
import { endpointNotFound } from "../errorHandlers";

describe("Given an endpointNotFound middleware", () => {
  describe("When it receives an error", () => {
    test("Then it should calla next function and return an error like 'Endpoint not found'", () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {};
      const next: NextFunction = jest.fn();
      const expectedCustomError = new CustomError(
        "Error, robot not found",
        404,
        "Error, robot not found",
      );

      endpointNotFound(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expectedCustomError);
    });
  });
});
