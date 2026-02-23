import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      "string.email": "L'email doit être une adresse email valide",
      "any.required": "L'email est requis",
      "string.empty": "L'email ne peut pas être vide"
    }),
  password: Joi.string().min(6).required()
    .messages({
      "string.min": "Le mot de passe doit contenir au moins 6 caractères",
      "any.required": "Le mot de passe est requis",
      "string.empty": "Le mot de passe ne peut pas être vide"
    })
});

export const registerSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      "string.email": "L'email doit être une adresse email valide",
      "any.required": "L'email est requis",
      "string.empty": "L'email ne peut pas être vide"
    }),
  password: Joi.string().min(6).required()
    .messages({
      "string.min": "Le mot de passe doit contenir au moins 6 caractères",
      "any.required": "Le mot de passe est requis",
      "string.empty": "Le mot de passe ne peut pas être vide"
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required()
    .messages({
      "any.only": "Les mots de passe doivent correspondre",
      "any.required": "La confirmation du mot de passe est requise"
    })
});

