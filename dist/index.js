"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const routes_1 = require("./api/routes");
const logger_1 = require("./logger");
const app = express();
const port = process.env.PORT || 8080;
const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
    origin: allowedOrigins
};
app.use(cors(corsOptions));
app.use(cors());
(0, routes_1.default)(app);
app.listen(port, () => {
    logger_1.default.log('success', `Server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map