import { Router } from "express";
import {
  createFournisseur,
  getFournisseurs,
  getFournisseur,
  deleteFournisseur
} from "../controllers/fournisseur.controller.js";
import { validate } from "../middlewares/validate.js";
import { fournisseurSchema } from "../validations/fournisseur.schema.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Fournisseurs
 *   description: Gestion des fournisseurs
 */

/**
 * @swagger
 * /fournisseurs:
 *   post:
 *     summary: Créer un fournisseur
 *     tags: [Fournisseurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nom, email, telephone]
 *             properties:
 *               nom:
 *                 type: string
 *               telephone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Fournisseur créé
 */
router.post("/", validate(fournisseurSchema), createFournisseur);

/**
 * @swagger
 * /fournisseurs:
 *   get:
 *     summary: Liste des fournisseurs
 *     tags: [Fournisseurs]
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", getFournisseurs);

/**
 * @swagger
 * /fournisseurs/{id}:
 *   get:
 *     summary: Détail d'un fournisseur
 *     tags: [Fournisseurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Fournisseur introuvable
 */
router.get("/:id", getFournisseur);

/**
 * @swagger
 * /fournisseurs/{id}:
 *   delete:
 *     summary: Supprimer un fournisseur
 *     tags: [Fournisseurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Supprimé
 */
router.delete("/:id", deleteFournisseur);

export default router;

