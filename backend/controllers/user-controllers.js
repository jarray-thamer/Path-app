import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager";

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.

  } catch (e) {
    console.log(e);
    return res.status(200).json({ message: "ERROR", cause: e.message });
  }
};
