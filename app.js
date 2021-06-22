const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const homeRouter = require("./router/home");

app.use("/", homeRouter);

module.exports = app;
