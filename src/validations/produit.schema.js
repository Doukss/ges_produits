import Joi from "joi";

export const produitSchema = Joi.object({
  quantite: Joi.number().integer().min(0).required()
    .messages({
      "number.base": "La quantité doit être un nombre",
      "number.integer": "La quantité doit être un entier",
      "number.min": "La quantité ne peut pas être négative",
      "any.required": "La quantité est requise"
    }),
  categorie: Joi.string().required()
    .messages({
      "string.empty": "La catégorie est requise",
      "any.required": "La catégorie est requise"
    })
});

export const produitUpdateSchema = Joi.object({
  quantite: Joi.number().integer().min(0)
    .messages({
      "number.base": "La quantité doit être un nombre",
      "number.integer": "La quantité doit être un entier",
      "number.min": "La quantité ne peut pas être négative"
    }),
  categorie: Joi.string()
    .messages({
      "string.empty": "La catégorie ne peut pas être vide"
    })
}).min(1);

