import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from "react";
import ItemFetchingService from "../../services/item-fetching-service";

const dummyList = ['aaa', 'bbbb', 'cccc']

function CurrentWeekItemsList() {
    const [items, setItems] = useState([])
    // @ts-ignore
    useEffect(async () => {
        console.log('use effect1')
        const currentWeekItems = await ItemFetchingService.fetchFromCurrentWeek() as any;
        console.log('use effect')
        setItems(currentWeekItems);
        // fetch("/api/data").then(
        //     res => setItems(res.data)
        // )
    })

    return (
        <div>
            <Typography variant="h3" data-testid="list-title">
            Current week items
            </Typography>
            <h2>{dummyList[0]}</h2>
            { items && (<h2>{items[0]}</h2>) }
            {items && items.map((item: any) => (
                <h2>{item}</h2>
            ))}
        </div>
    );
}

export default CurrentWeekItemsList;
