import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ entended: false }));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());

app.use("/", router);

export default app;