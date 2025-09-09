const express = require("express");
const jwt = require("jsonwebtoken");

/**
 * @param  {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function auth(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      msg: "token required..",
    });
  }
  const token = auth.split(" ")[1];

  try {
    if (jwt.verify(token, process.env.JWT_SECRECT)) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ msg: "invalid token.." });
  }
}

module.exports = { auth };
