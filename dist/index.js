"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./api/routes");
const cors = require("cors");
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
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map