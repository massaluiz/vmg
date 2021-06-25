const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const homeRouter = require("./routers/home");
const usersRouter = require('./routers/users');

app.use("/", homeRouter);
app.use("/users", usersRouter);

module.exports = app;
