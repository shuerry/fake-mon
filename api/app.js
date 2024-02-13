import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/routes.js";

const app = express();

app.set("view engine", "ejs");

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", router);

export default app;