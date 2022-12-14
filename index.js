require("./config/dotEnv");
require("./config/mongoDb");

//3rd Party Modules
const express = require("express");

//User Defined Modules
const middlewares = require("./middlewares/index");

const user = require("./route/User");
const projects = require("./route/Projects");

//Express Container
const app = express();

//Middlewares
app.use(middlewares.morgan);
app.use(middlewares.bodyParser);
app.use(user);
app.use(projects);

//Server Listening
app.listen(process.env.PORT, (err) => {
  if (err) console.log("Server Error = > ", err);
  else console.log(`Server is Running Fine on =>`, process.env.PORT);
});
