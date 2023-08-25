import debugCreator from "debug";
import "dotenv/config.js";
import app from "./index.js";

const debug = debugCreator("robots:server:start");

const startServer = (port: string | number) => {
  app.listen(Number(port), () => {
    debug(`Listening on http://localhost:${port}`);
  });
};

export default startServer;
