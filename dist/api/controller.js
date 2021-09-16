'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const itemFetchingService_1 = require("../services/itemFetchingService");
const controller = {
    home: (req, res) => res.json("Cook-it"),
    async currentWeekItems(req, res) {
        const currentWeekItems = await itemFetchingService_1.default.fetchFromCurrentWeek();
        // res.json(await itemFetchingService.fetchFromCurrentWeek());
        res.send({ currentItems: currentWeekItems });
    },
};
exports.default = controller;
//# sourceMappingURL=controller.js.map