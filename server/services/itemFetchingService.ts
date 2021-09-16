import { Response } from "express";
import axios from 'axios';
import * as moment from 'moment-timezone';

const itemsUrl = 'https://ops.stage.fulfillment.cookittech.com/weekitems';

const itemFetchingService = {
    fetchAll: async (): Promise<[]> => {
        const response = await axios.get(itemsUrl);
        const data = await response.data;

        const items = data.result.weekItems;

        return items;
    },
    fetchFromCurrentWeek: async (): Promise<[] | never[]> => {
        const today = moment();
        const currentWeekStartDate = today.startOf('week');

        const items = await itemFetchingService.fetchAll();

        const currentWeekItems = items.filter((item: any) =>
            currentWeekStartDate.isSame(moment(item.deliveryWeek), 'day'));

        return currentWeekItems;
    }
}

export default itemFetchingService;
