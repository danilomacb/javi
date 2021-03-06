const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const withAuth = require("../utils/withAuth");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro interno, por favor tente novamente");
    } else if (!user) {
      res.status(401).json("Email ou senha incorretos");
    } else {
      user.isCorrectPassword(password, (err, same) => {
        if (err) {
          console.error(err);
          res.status(500).json("Erro interno, por favor tente novamente");
        } else if (!same) {
          res.status(401).json("Email ou senha incorretos");
        } else {
          const payload = { email };
          const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h"
          });
          res
            .cookie("token", token, { httpOnly: false })
            .status(200)
            .json("Seja bem vindo!");
        }
      });
    }
  });
});

router.get("/checkToken", withAuth, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
