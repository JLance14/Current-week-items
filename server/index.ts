import * as express from "express";
import routes from "./api/routes";
import * as cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

const allowedOrigins = ['http://localhost:3000'];
const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(corsOptions));
app.use(cors());
routes(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
})
