"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const myCustomLevels = {
    levels: {
        success: 0,
        info: 1,
        danger: 2,
    },
    colors: {
        success: 'green',
        info: 'yellow',
        danger: 'red'
    }
};
winston.addColors(myCustomLevels.colors);
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    levels: myCustomLevels.levels,
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
winston.format.combine(winston.format.colorize(), winston.format.simple());
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
exports.default = logger;
//# sourceMappingURL=logger.js.map