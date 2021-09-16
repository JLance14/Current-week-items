"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const itemsUrl = 'https://ops.stage.fulfillment.cookittech.com/weekitems';
const itemFetchingService = {
    fetchFromRange: (req, res) => {
        axios_1.default.get(itemsUrl).then(result => {
            const weekItems = result.data.result.weekItems;
            // tslint:disable-next-line:no-console
            console.log(weekItems);
            // tslint:disable-next-line:no-console
            console.log('dataTotal: ', weekItems.length);
            res.send("COOK IT BOI: " + JSON.stringify(weekItems));
        });
    }
};
module.exports = itemFetchingService;
//# sourceMappingURL=itemFetchingService.js.map