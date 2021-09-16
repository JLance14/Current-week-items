import * as express from "express";
import routes from "./api/routes";
// import axios from 'axios';

const app = express();
const port = process.env.PORT || 8080;

// const routes = await import('./api/routes');
// Promise.resolve(routes).then(async () => {
//     (await routes)(app)
// });

routes(app);
// app.get("/", (req, res) => {
//     res.send("Cook-it server");
// });

// app.get("/cook-it", (req, res) => {
//     axios.get('https://ops.stage.fulfillment.cookittech.com/weekitems').then(result => {
//         const weekItems = result.data.result.weekItems;
//         // tslint:disable-next-line:no-console
//         console.log(weekItems);
//
//         // tslint:disable-next-line:no-console
//         console.log('dataTotal: ', weekItems.length);
//         res.send("COOK IT BOI: " + JSON.stringify(weekItems));
//     })
// });

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
})