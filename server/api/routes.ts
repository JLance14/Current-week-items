'use strict';

import { Express } from "express";
import controller from './controller';

const routes = (app: Express) => {
    app.route('/').get(controller.home)
    app.route('/current-week-items').get(controller.currentWeekItems);
};

export default routes;
