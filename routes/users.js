const express = require("express");
const router = express.Router();
const firebase = require("firebase");

const config = require("../keys");

firebase.initializeApp(config);

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.get("/logout", (req, res) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      res.redirect("/users/login");
    })
    .catch(err => {
      res.redirect("/error");
    });
});

router.post("/login", (req, res) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(user => {
      res.redirect("/");
    })
    .catch(error => {
      let errCode = error.code;
      let errMsg = error.message;
      res.render("users/login", { msg: errMsg });
    });
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.redirect("/users/login");
});

module.exports = router;
