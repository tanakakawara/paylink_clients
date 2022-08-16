const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("website/landing");
});

app.get("/test", (req, res) => {
  res.render("test");
});

// routes
/* auth */
app.get("/signin", (req, res) => {
  res.render("auth/signin");
});
app.get("/auth/two_factor", (req, res) => {
  res.render("auth/two_factor");
});
app.get("/auth/signin", (req, res) => {
  res.render("auth/signin");
});

/*clients*/
app.get("/clients", (req, res) => {
  res.render("clients/list");
});
app.get("/account/clients/add", (req, res) => {
  res.render("clients/add");
});
app.get("/account/clients/delete/:clients_id", (req, res) => {
  res.render("clients/delete");
});
app.get("/account/clients/view/:id", (req, res) => {
  res.render("clients/view_clients");
});

/* account */

app.get("/account/notifications_page/:id", (req, res) => {
  res.render("account/notifications_page");
});
app.get("/account/notifications", (req, res) => {
  res.render("account/notifications_landing");
});
app.get("/account/profile", (req, res) => {
  res.render("account/view_profile");
});
app.get("/account", (req, res) => {
  res.render("account/dashboard");
});
app.get("/account/reset_pin/:id", (req, res) => {
  res.render("account/reset_pin");
});
app.get("/account/send_money/:id", (req, res) => {
  res.render("account/send_money");
});
app.get("/account/statement/:id", (req, res) => {
  res.render("account/statement");
});
app.get("/account/transfer_money/:id", (req, res) => {
  res.render("account/transfer_money");
});
app.get("/account/balance/:id", (req, res) => {
  res.render("account/balance");
});

/* user-management */
app.get("/users", (req, res) => {
  res.render("user-management/list");
});
app.get("/users/new", (req, res) => {
  res.render("user-management/new_accounts");
});
app.get("/users/active", (req, res) => {
  res.render("user-management/active_accounts");
});
app.get("/users/suspended", (req, res) => {
  res.render("user-management/suspended_accounts");
});
app.get("/user-management/profile/:id", (req, res) => {
  res.render("user-management/user_profile");
});

/* global-config */
app.get("/global_config", (req, res) => {
  res.render("global-config/global_config");
});

/* reports */
app.get("/reports", (req, res) => {
  res.render("reports/reports");
});

app.listen(4000);
