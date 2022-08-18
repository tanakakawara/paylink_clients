const express = require("express");
const router = express.Router();
//######################################

router.get("/auth/two_factor", (req, res) => {
  res.render("auth/two_factor");
});
router.get("/auth/signin", (req, res) => {
  res.render("auth/signin");
});

/*clients*/
router.get("/clients", (req, res) => {
  const clients = [
    {
      id: 1,
      national_id: "rufaro",
      driverslicense: "rufa",
      passportnumber: 98,
      nationality: "zim",
      full_name: "tanaka",
    },
  ];

  res.render("clients/view_clients", {
    client_details: JSON.stringify(clients),
  });
router.get("/account/clients/add", (req, res) => {
  res.render("clients/add");
});
router.get("/account/clients/delete/:clients_id", (req, res) => {
  res.render("clients/delete");
});

router.get("/account/clients/view/:id", (req, res) => {
  const client_details = {
    nat_id: "23-4378348T84",
    driverslicence: "3678909",
    passportnumber: "222",
    nationality: "zimbabwean",
    first_name: "travour",
    midddlename: "vongai",
    last_name: "nomail@motsi",
    phone: 773849302,
    email: "travour@aplimac.co.zw",

    gender: "male",
    marital_status: "single",
    address1: "high",
    address2: "low",
    address_city: "trinity",
    address_country: "zimbabwe",
  };

  res.render("clients/view_clients", {
    client_details: JSON.stringify(client_details),
  });
});

/* account */

router.get("/account/notifications_page/:id", (req, res) => {
  res.render("account/notifications_page");
});
router.get("/account/notifications", (req, res) => {
  res.render("account/notifications_landing");
});
router.get("/account/profile", (req, res) => {
  const client_details = {
    nat_id: "23-4378348T84",
    driverslicence: "3678909",
    passportnumber: "222",
    nationality: "zimbabwean",
    first_name: "travour",
    midddlename: "vongai",
    last_name: "nomail@motsi",
    phone: 773849302,
    email: "travour@aplimac.co.zw",

    gender: "male",
    marital_status: "single",
    address1: "high",
    address2: "low",
    address_city: "trinity",
    address_country: "zimbabwe",
  };

  res.render("account/view_profile", {
    client_details: JSON.stringify(client_details),
  });
  //#####################################################################

  // fetch(url)
  //   .then((response) => response.text())
  //   .then((data) => {
  //     client_details = data;

  //     res.render("account/view_profile", {
  //       client_details: JSON.stringify(client_details),
  //     });
  //   })
  //   .catch((error) => {
  //     res.redirect("/error");
  //   });
});
router.get("/account", (req, res) => {
  res.render("account/dashboard");
});
router.get("/account/reset_pin/:id", (req, res) => {
  res.render("account/reset_pin");
});
router.get("/account/send_money/:id", (req, res) => {
  res.render("account/send_money");
});
router.get("/account/statement/:id", (req, res) => {
  res.render("account/statement");
});
router.get("/account/transfer_money/:id", (req, res) => {
  res.render("account/transfer_money");
});
router.get("/account/balance/:id", (req, res) => {
  res.render("account/balance");
});

/* user-management */
router.get("/users", (req, res) => {
  res.render("user-management/list");
});
router.get("/users/new", (req, res) => {
  res.render("user-management/new_accounts");
});
router.get("/users/active", (req, res) => {
  res.render("user-management/active_accounts");
});
router.get("/users/suspended", (req, res) => {
  res.render("user-management/suspended_accounts");
});
router.get("/user-management/profile/:id", (req, res) => {
  res.render("user-management/user_profile");
});

/* global-config */
router.get("/global_config", (req, res) => {
  res.render("global-config/global_config");
});

/* reports */
router.get("/reports", (req, res) => {
  res.render("reports/reports");
});
//######################################
module.exports = router;
