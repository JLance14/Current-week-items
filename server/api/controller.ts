'use strict'

import { Request, Response } from "express";
import itemFetchingService from '../services/itemFetchingService';

const controller = {
    home: (req: Request, res: Response) => res.json("Cook-it"),
    async currentWeekItems(req: Request, res: Response) {
        const currentWeekItems = await itemFetchingService.fetchFromCurrentWeek();
        res.send({ currentItems: currentWeekItems})
    },
}

export default controller;
