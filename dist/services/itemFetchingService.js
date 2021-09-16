"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const moment = require("moment-timezone");
const itemsUrl = 'https://ops.stage.fulfillment.cookittech.com/weekitems';
const itemFetchingService = {
    fetchAll: async () => {
        const response = await axios_1.default.get(itemsUrl);
        const data = await response.data;
        const items = data.result.weekItems;
        return items;
    },
    fetchFromCurrentWeek: async () => {
        const today = moment();
        const currentWeekStartDate = today.startOf('week');
        const items = await itemFetchingService.fetchAll();
        const currentWeekItems = items.filter((item) => currentWeekStartDate.isSame(moment(item.deliveryWeek), 'day'));
        return currentWeekItems;
    }
};
exports.default = itemFetchingService;
//# sourceMappingURL=itemFetchingService.js.map