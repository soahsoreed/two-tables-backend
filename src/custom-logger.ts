import winston from "winston";
import { LOG_LEVEL } from "./env-vars.js";

console.log('logLevel', LOG_LEVEL);

export const customLogger = winston.createLogger({
  level: LOG_LEVEL,
  // format: winston.format.json(),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //
    // - Write all logs with importance level of `info` or higher to `combined.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    // new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console()
  ],
});
