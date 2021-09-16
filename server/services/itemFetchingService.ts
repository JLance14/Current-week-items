import { Response } from "express";
import axios from 'axios';
import moment from 'moment';

const itemsUrl = 'https://ops.stage.fulfillment.cookittech.com/weekitems';

const itemFetchingService = {
    fetchItems: (res: Response, next: any): void => {
        axios.get(itemsUrl).then(result => {
            const weekItems = result.data.result.weekItems;
            res.send(JSON.stringify(weekItems));
        });
    },
    fetchFromCurrentWeek: (res: Response) => {
        const today = moment();
        const currentWeekStartDate = today.startOf('week');
        itemFetchingService.fetchItems(res, (err: any, items: any) => {
            if (err) {
                res.send(err);
            }

            // tslint:disable-next-line:no-console
            console.log('DOIN IT')

            const currentWeekItems = items.filter((item: any) =>
                currentWeekStartDate.isSame(moment(item.deliveryWeek), 'day'));

            res.send(JSON.stringify(currentWeekItems));
        })
    }
}

export default itemFetchingService;

