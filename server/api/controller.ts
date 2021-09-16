'use strict'

import { Request, Response } from "express";
import itemFetchingService from '../services/itemFetchingService';

const controller = {
    home: (req: Request, res: Response) => res.json("Cook-it"),
    currentWeekItems: (req: Request, res: Response) => {
        let items = [];
        itemFetchingService.fetchFromCurrentWeek(items);
        // return res.json("currentWeek")
        return res.json(items)
    }
}

export default controller;

