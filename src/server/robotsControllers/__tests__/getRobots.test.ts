import { type Request, type Response } from "express";
import Robot from "../../../database/models/Robot";
import CustomError from "../../../middlewares/CustomError";
import { mockRobots } from "../../../mocks/mockRobots";
import { getRobots } from "../robotsControllers";

beforeEach(() => {
  jest.clearAllMocks();
});

const req: Partial<Request> = {};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next = jest.fn();

describe("Given a getRobots component", () => {
  describe("When it receives a response", () => {
    Robot.find = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockRobots),
    });

    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await getRobots(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with two robots", async () => {
      await getRobots(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobots });
    });
  });

  describe("When it receives a next function and can't get any robot from the database", () => {
    test("Then it should call the received next function with 404 codestatus and 'Can't retrieve robots'", async () => {
      const expectedError = new CustomError(
        "Can't retrieve robots",
        404,
        "Can't retrieve robots",
      );

      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockRejectedValue(expectedError),
      });

      await getRobots(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
