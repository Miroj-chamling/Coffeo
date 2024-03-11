import { app } from "./app/index.js";
import logger from "./utils/logger.js";
import { env } from "./utils/env.js";

app.listen(env.PORT , () => {
  logger.info(`success ${env.PORT}`);
});
