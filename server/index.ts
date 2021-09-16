import * as express from "express";
import * as cors from "cors";
import routes from "./api/routes";
import logger from "./logger";

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
    logger.log('success', `Server started at http://localhost:${port}`);
})
