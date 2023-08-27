import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectToDatabase from "../../../database/connectToDatabase.js";
import Robot from "../../../database/models/Robot.js";
import { type RobotStructure } from "../../../database/type.js";
import { mockRobots } from "../../../mocks/mockRobots.js";
import app from "../../index.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
  await Robot.create(mockRobots);
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given a GET '/robots' endpoint", () => {
  const expectedPath = "/robots";

  describe("When it receives a request", () => {
    test("Then it should respond with status 200 and robots objects", async () => {
      const expectedCodeStatus = 200;

      const response = await request(app)
        .get(expectedPath)
        .expect(expectedCodeStatus);

      const responseBody = response.body as { robots: RobotStructure[] };

      mockRobots.forEach(
        ({ name, image, resistance, speed }, robotsPosition) => {
          expect(responseBody.robots[robotsPosition]).toHaveProperty(
            "name",
            name,
          );
          expect(responseBody.robots[robotsPosition]).toHaveProperty(
            "speed",
            speed,
          );
          expect(responseBody.robots[robotsPosition]).toHaveProperty(
            "image",
            image,
          );
          expect(responseBody.robots[robotsPosition]).toHaveProperty(
            "resistance",
            resistance,
          );
        },
      );
    });
  });

  describe("When it receives a request and database is offline", () => {
    test("Then it should show an error with status code 500 and message 'Can't retrieve robots'", async () => {
      const errorCode = 500;
      await mongoose.connection.close();
      await request(app).get(expectedPath).expect(errorCode);
    });
  });
});
