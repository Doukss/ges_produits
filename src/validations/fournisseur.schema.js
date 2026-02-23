import Joi from "joi";

export const fournisseurSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      "string.email": "L'email doit être une adresse email valide",
      "any.required": "L'email est requis",
      "string.empty": "L'email ne peut pas être vide"
    }),
  telephone: Joi.string().pattern(/^[0-9]{8,15}$/).required()
    .messages({
      "string.pattern.base": "Le téléphone doit contenir entre 8 et 15 chiffres",
      "any.required": "Le téléphone est requis",
      "string.empty": "Le téléphone ne peut pas être vide"
    })
});

export const fournisseurUpdateSchema = Joi.object({
  email: Joi.string().email()
    .messages({
      "string.email": "L'email doit être une adresse email valide",
      "string.empty": "L'email ne peut pas être vide"
    }),
  telephone: Joi.string().pattern(/^[0-9]{8,15}$/)
    .messages({
      "string.pattern.base": "Le téléphone doit contenir entre 8 et 15 chiffres"
    })
}).min(1);

