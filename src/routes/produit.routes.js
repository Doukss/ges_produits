import { Router } from "express";
import {
  createProduit,
  getProduits,
  getProduit,
  deleteProduit
} from "../controllers/produit.controller.js";
import auth from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { produitSchema } from "../validations/produit.schema.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Produits
 *   description: Gestion des produits
 */

/**
 * @swagger
 * /produits:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Créer un produit
 *     tags: [Produits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [quantite, categorie]
 *             properties:
 *               quantite:
 *                 type: integer
 *               categorie:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produit créé
 */
router.post("/", auth, validate(produitSchema), createProduit);

/**
 * @swagger
 * /produits:
 *   get:
 *     summary: Liste des produits
 *     tags: [Produits]
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", getProduits);

/**
 * @swagger
 * /produits/{id}:
 *   get:
 *     summary: Détail d'un produit
 *     tags: [Produits]
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
 *         description: Produit introuvable
 */
router.get("/:id", getProduit);

/**
 * @swagger
 * /produits/{id}:
 *   delete:
 *     summary: Supprimer un produit
 *     tags: [Produits]
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
router.delete("/:id", deleteProduit);

export default router;

