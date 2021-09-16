import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from "react";
import UrlExtractingService from "../../services/url-extracting-service";
import itemFetchingService from "../../services/item-fetching-service";
import { Card, CardContent, CardHeader, CardMedia, WithStyles, withStyles } from "@material-ui/core";

const styles = () => ({
    productTitle: {
        fontWeight: 'bold'
    },
    card: {
        margin: '2rem'
    }
}) as const;

interface Props extends WithStyles<typeof styles> {}

interface State{
    items: [];
}

export class CurrentWeekItemsList extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        const result = await itemFetchingService.fetchFromCurrentWeek() as any;
        this.setState({ items: result });
    }

    render() {
        const { classes } = this.props;
        const { items } = this.state;

        return (
            <div>
                { items && items.map((currentWeekItem: any) => (
                    <Card className={classes.card} data-testid="itemCard" key={currentWeekItem.id}>
                        <CardHeader
                            title={currentWeekItem.item.displayName}
                            titleTypographyProps={{variant:'h3' }}
                            classes={{
                                title: classes.productTitle
                            }}
                        />
                        <CardMedia component="img"
                                   image={UrlExtractingService.extractUrlFromMetadata(currentWeekItem.item.metaData)} />
                        <CardContent>
                            <Typography variant="h4" align="left"><b>ID:</b> {currentWeekItem.item.id}</Typography>
                            <Typography variant="h4" align="left"><b>name:</b> {currentWeekItem.item.displayName}</Typography>
                            <Typography variant="h4" align="left"><b>category:</b> {currentWeekItem.item.category}</Typography>
                            <Typography variant="h4" align="left"><b>status:</b> {currentWeekItem.item.status}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }
}

export default withStyles(styles)(CurrentWeekItemsList);

