import Joi from "joi";
import { HttpError } from "../utils/httpError.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errorDetails = error.details.map(detail => ({
        field: detail.path.join("."),
        message: detail.message
      }));
      throw new HttpError(400, "VALIDATION_ERROR", errorDetails);
    }

    req.body = value;
    next();
  };
};

