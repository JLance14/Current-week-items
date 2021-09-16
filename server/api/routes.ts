'use strict';

import { Express } from "express";
import controller from './controller';

const routes = (app: Express) => {
    app.route('/').get(controller.home)
    app.route('/current-week-items').get(controller.currentWeekItems);
};

export default routes;

// module.exports = (app: Express) => {
//     Promise.resolve(controller).then(async () => {
//         const resolvedController = await controller;
//         // @ts-ignore
//         app.route('/').get(resolvedController.home)
//         // @ts-ignore
//         app.route('/current-week-items').get((await controller).currentWeekItems);
//     });
// }