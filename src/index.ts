import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4001;

startServer(port);
