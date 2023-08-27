import { type NextFunction, type Request, type Response } from "express";
import Robot from "../../../database/models/Robot";
import { type RobotStructure } from "../../../database/type";
import CustomError from "../../../middlewares/CustomError";
import { createdRobotMock } from "../../../mocks/mockRobots";
import { createRobot } from "../robotsControllers";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given an addRobot controller", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a Robot, response and next function", () => {
    Robot.create = jest.fn().mockResolvedValue(createdRobotMock);

    test("Then it should respond with status 201", async () => {
      const expectedStatus = 201;

      await createRobot(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          RobotStructure
        >,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should respond with new created robot", async () => {
      await createRobot(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          RobotStructure
        >,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ robot: createdRobotMock });
    });
  });

  describe("When it receives a request with an incorrect Robot, a response and next function", () => {
    test("Then it should respond with 'Can't create the robot'", async () => {
      const error = new Error("error");
      const customError = new CustomError(
        "Can't create the robot",
        500,
        error.message,
      );

      Robot.create = jest.fn().mockRejectedValue(error);

      await createRobot(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          RobotStructure
        >,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(customError);
    });
  });
});
