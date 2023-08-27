import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError";
import { generalErrorHandler } from "../errorHandlers";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a generalErrorHandler middleware controller", () => {
  describe("When it receives a response with an error", () => {
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const req: Partial<Request> = {};
    const receivedError = new CustomError(
      "Error, robot not found",
      404,
      "Error, robot not found",
    );
    const next = jest.fn();

    test("Then it should call the response status with code 404", () => {
      const expectedStatusCode = 404;

      generalErrorHandler(
        receivedError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response and an error with the message 'Error, robot not found'", () => {
      const error = "Error, robot not found";

      generalErrorHandler(
        receivedError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ error });
    });
  });

  describe("When it receives a response and the errorhandler can't handle this error", () => {
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const req: Partial<Request> = {};
    const receivedError = new Error();
    const next = jest.fn();

    test("Then it should call a response with a codeStatus 500", () => {
      const expectedCode = 500;

      generalErrorHandler(
        receivedError as CustomError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedCode);
    });

    test("Then it should respond with 'Fatal Error' message", () => {
      const receivedError = new Error("Fatal Error");
      const expectedErrorMessage = "Fatal Error";

      generalErrorHandler(
        receivedError as CustomError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ error: expectedErrorMessage });
    });
  });
});
