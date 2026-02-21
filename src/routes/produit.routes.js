import { Router } from "express";
import {
  createProduit,
  getProduits,
  getProduit,
  deleteProduit
} from "../controllers/produit.controller.js";
import auth from "../middlewares/auth.js";

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
 */
router.post("/", auth, createProduit);

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
 *     summary: Détail d’un produit
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