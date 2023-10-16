import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { dirname } from "path";
import { fileURLToPath } from "url";

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/sm-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Connected to database");
  })
  .catch(function (error) {
    console.log(error);
  });

app.get("/", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.sendFile(__dirname + "/src/App.jsx");
});

app.listen(3000, function (req, res) {
  console.log("Server running on port 3000");
});
