'use strict';

import { Express } from "express";

const controller = import('./controller');

module.exports = (app: Express) => {
    app.route('/').get(controller.home)
}