import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
import { resolve } from "path";
import { rejects } from "assert";

export const createToken = (id, email, expiresIn) => {
  const payload = { id, email };
  const token = jwt.sign(payload, "itsMouse", {
    expiresIn,
  });
  return token;
};
export const verifyToken = async (req, res, next) => {
  const token = req.signedCookies["auth_token"];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }
  return new Promise((resolve, reject) => {
    return jwt.verify(token, "itsMouse", (err, success) => {
      if (err) {
        reject(err.message);
        return res.status(401).json({ message: "Token Expired" });
      } else {
        resolve();
        res.locals.jwtData = success;
        return next();
      }
    });
  });
};
