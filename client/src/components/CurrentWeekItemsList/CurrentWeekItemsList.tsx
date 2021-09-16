import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from "react";
import UrlExtractingService from "../../services/url-extracting-service";
import itemFetchingService from "../../services/item-fetching-service";

function CurrentWeekItemsList() {
    const [items, setItems] = useState([])

    // @ts-ignore
    useEffect(async () => {
        const result = await itemFetchingService.fetchFromCurrentWeek() as any;
        setItems(result)
    }, [])

    return (
        <div>
        { items && items.map((currentWeekItem: any) => (
            <div>
                <Typography variant="h3">id: {currentWeekItem.item.id}</Typography>
                <Typography variant="h3">name: {currentWeekItem.item.displayName}</Typography>
                <Typography variant="h3">category: {currentWeekItem.item.category}</Typography>
                <Typography variant="h3">status: {currentWeekItem.item.status}</Typography>
                <img src={UrlExtractingService.extractUrlFromMetadata(currentWeekItem.item.metaData)} />
            </div>
                ))}
        </div>
    );
}

export default CurrentWeekItemsList;
