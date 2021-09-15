import * as express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello Port: " + port);
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
})