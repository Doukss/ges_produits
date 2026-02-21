import jwt from "jsonwebtoken";
import { HttpError } from "../utils/httpError.js";

export default function auth(req, _res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    throw new HttpError(401, "UNAUTHORIZED", "Token manquant");
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role, email... }
    next();
  } catch {
    throw new HttpError(401, "UNAUTHORIZED", "Token invalide");
  }
}