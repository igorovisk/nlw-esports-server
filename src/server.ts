const express = require("express");
const app = express();
const cors = require("cors");
import routes from "./routes/index";
import bodyParser from "body-parser";

app.use(
   cors({
      origin: "*",
   })
);
app.use(bodyParser.json());

app.use("/games", routes.gamesRoutes);
app.use("/ads", routes.adsRoutes);

app.listen(3333, () => console.log("Running server on port 3333"));
