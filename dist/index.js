"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const axios_1 = require("axios");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
    res.send("Hello Port: " + port);
});
app.get("/cook-it", (req, res) => {
    axios_1.default.get('https://ops.stage.fulfillment.cookittech.com/weekitems').then(result => {
        const weekItems = result.data.result.weekItems;
        // tslint:disable-next-line:no-console
        console.log(weekItems);
        // tslint:disable-next-line:no-console
        console.log('dataTotal: ', weekItems.length);
        res.send("COOK IT BOI: " + JSON.stringify(weekItems));
    });
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map