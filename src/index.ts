import debugCreator from "debug";
import "dotenv/config";
import connectToDatabase from "./database/connectToDatabase.js";
import startServer from "./server/startServer.js";

const debug = debugCreator("robots:server:start");

const port = process.env.PORT ?? 4001;

const mongoDbUrl = process.env.MONGO_ROBOTS_URL!;

try {
  await connectToDatabase(mongoDbUrl);

  startServer(port);

  debug("Connected to database");
} catch (error: unknown) {
  debug("Error connecting to database");
  debug((error as Error).message);

  process.exit(1);
}
