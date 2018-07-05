require("./config/config");
// || external imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chalk = require("chalk");
// || local imports
const { router } = require("./router/router");

const port = process.env.PORT;
app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(chalk.blue(`server running on ${port}`));
});

module.exports = {
  app
};
