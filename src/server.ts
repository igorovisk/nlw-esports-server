const express = require("express");
const app = express();
import routes from "./routes/index";
import bodyParser from "body-parser";

app.use(bodyParser.json());

app.use("/games", routes.gamesRoutes);
app.use("/ads", routes.adsRoutes);

app.listen(3333, () => console.log("Running server on port 3333"));
