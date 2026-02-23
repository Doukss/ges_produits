import jwt from "jsonwebtoken";
import { HttpError } from "../utils/httpError.js";

export default function auth(req, _res, next) {
  const header = req.headers.authorization;


  // Vérification de la présence du token
  if (!header || !header.startsWith("Bearer ")) {
    throw new HttpError(401, "UNAUTHORIZED", "Token manquant");
  }

  // Extraction du token
  const token = header.split(" ")[1];

  // Vérification du token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    throw new HttpError(401, "UNAUTHORIZED", "Token invalide");
  }
}