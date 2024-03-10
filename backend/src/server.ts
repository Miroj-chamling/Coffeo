import { app } from "./app/index.js";
import logger from "./utils/logger.js";
import { env } from "./utils/env.js";

app.listen(8000 , () => {
  logger.info(`success ${env.PORT}`);
});
