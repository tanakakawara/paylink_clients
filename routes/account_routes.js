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
      driverslicense: 12,
      passportnumber: 98,
      nationality: "zim",
      full_name: "tanaka",
    },
  ];
  res.render("clients/list", {
    clients: JSON.stringify(clients),
  });
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

/* account */

router.get("/account/notifications_page/:id", (req, res) => {
  const notifications = { date: "23-04-22", message: "animals" };
  res.render("account/notifications_page", {
    notifications: JSON.stringify(notifications),
  });
});
router.get("/account/notifications", (req, res) => {
  const notifications = [
    {
      id: 1,
      title: "rufaro",
      message: "rufa",
      date: 2,
      status: 0,
    },
    {
      id: 2,
      title: "taa",
      message: "wait",
      date: 2,
      status: 0,
    },
  ];

  res.render("account/notifications_landing", {
    notifications: JSON.stringify(notifications),
  });
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
  const receiver_details = {
    receiver_fullname: "Travour Motsi",
    account: 567890,
    amount: 34,
  };

  const header_det = {
    accountNo: 134567,
    fullname: "Tanaka Kawara",
    date: "22-01-13",
  };

  res.render("account/send_money", {
    receiver_details: JSON.stringify(receiver_details),
    header_det: JSON.stringify(header_det),
  });
});

router.get("/account/statement/:id", (req, res) => {
  const header_det = {
    accountNo: 134567,
    fullname: "Tanaka Kawara",
    date: "22-01-13",
  };
  const statement_det = [
    {
      date: "22-01-12",
      description: "withdrawal",

      debit: "dr",
      credit: "cr",
      balance: 98,
    },
  ];
  res.render("account/statement", {
    header_det: JSON.stringify(header_det),
  });
});

router.get("/account/balance/:id", (req, res) => {
  const header_det = {
    accountNo: 134567,
    fullname: "Tanaka Kawara",
    date: "22-01-13",
  };
  const balance = { currency: "usd", amount: 12 };
  res.render("account/balance", {
    header_det: JSON.stringify(header_det),
    balance: JSON.stringify(balance),
  });
});

/* user-management */
router.get("/users", (req, res) => {
  const count_users = {
    new: 2,
    active: 3,
    suspended: 5,
  };

  res.render("user-management/list", {
    count_users: JSON.stringify(count_users),
  });
});
router.get("/users/suspended", (req, res) => {
  const suspended = [
    {
      id: 3,
      username: "tk",
      full_name: "tanaka",
      access_level: 2,
    },
  ];

  res.render("user-management/suspended_accounts", {
    suspended: JSON.stringify(suspended),
  });
  res.render("user-management/suspended_accounts");
});
router.get("/users/new", (req, res) => {
  const new_accounts = [
    {
      id: 3,
      username: "tk",
      full_name: "tanaka",
      access_level: 2,
    },
  ];

  res.render("user-management/new_accounts", {
    new_accounts: JSON.stringify(new_accounts),
  });
});
router.get("/users/active", (req, res) => {
  const active = [
    {
      id: 3,
      username: "tk",
      full_name: "tanaka",
      access_level: 2,
    },
  ];

  res.render("user-management/active_accounts", {
    active: JSON.stringify(active),
  });
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
