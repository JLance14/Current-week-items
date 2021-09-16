import * as express from "express";
import routes from "./api/routes";

const app = express();
const port = process.env.PORT || 8080;

routes(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
})