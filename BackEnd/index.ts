import express, { Application } from "express";
import cors from "cors";
import env from "dotenv";
import { mainApp } from "./MainApp";
import { dbConfig } from "./dbConfig";

env.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

mainApp(app);
app.listen(process.env.PORT, () => {
  dbConfig();
});
