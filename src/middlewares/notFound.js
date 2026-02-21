import { HttpError } from "../utils/httpError.js";

export default (_req, _res, next) => {
  console.log("404 middleware atteint");
  next(new HttpError(404, "NOT_FOUND", "Route introuvable"));
};
