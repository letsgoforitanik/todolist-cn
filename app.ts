import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { todoController } from "./controllers";
import { getPath } from "./helpers/getpath";

dotenv.config({ path: getPath(".env") });

const app = express();

app.set("view engine", "ejs");

app.use(express.static(getPath("public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", todoController.router);

mongoose.connect(process.env.CONNECTION_STRING).then(() => console.log("Connected to Todo Db"));

const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => console.log(`Server is running on port ${port}`));
