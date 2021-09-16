'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const routes = (app) => {
    app.route('/').get(controller_1.default.home);
    app.route('/current-week-items').get(controller_1.default.currentWeekItems);
};
exports.default = routes;
//# sourceMappingURL=routes.js.map