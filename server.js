const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//libs
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.use((req, res, =) => {
  const header_names = {
    fullname: "tanaka K",
    username: "tanakaa",
    new_not_count: 5,
  };

  const notifications_bar = [
    { id: 1, message: "word", title: "notifications" },
    { id: 1, message: "word", title: "notifications" },
    { id: 1, message: "word", title: "notifications" },
  ];

  res.locals.notifications_bar = JSON.stringify(notifications_bar);
  res.locals.header_names = JSON.stringify(header_names);

  next();
});

//ROUTES################################################
//auth
app.get("/", (req, res) => {
  res.render("account/dashboard");
});
app.get("/signin", (req, res) => {
  res.render("auth/signin");
});

//error
app.get("/error", (req, res) => {
  res.render("error/error");
});

//account routes
const account_routes = require("./routes/account_routes");
app.use("/", account_routes);
//end ROUTES#################################################

//error handler
app.use((req, res) => {
  res.redirect("/error");
});
app.listen(4000);
