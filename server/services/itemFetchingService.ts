import axios from 'axios';

const itemsUrl = 'https://ops.stage.fulfillment.cookittech.com/weekitems';

const itemFetchingService = {
    fetchFromRange:  (req: Request, res: Response) => {
        axios.get(itemsUrl).then(result => {
            const weekItems = result.data.result.weekItems;
            // tslint:disable-next-line:no-console
            console.log(weekItems);

            // tslint:disable-next-line:no-console
            console.log('dataTotal: ', weekItems.length);
            res.send("COOK IT BOI: " + JSON.stringify(weekItems));
        })
    }
}

