import { Router } from "express";
import {
  createCategorie,
  getCategories,
  getCategorie,
  deleteCategorie
} from "../controllers/categorie.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gestion des catégories
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Créer une catégorie
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - libelle
 *             properties:
 *               libelle:
 *                 type: string
 *                 example: Informatique
 *     responses:
 *       201:
 *         description: Catégorie créée
 *       422:
 *         description: Erreur de validation
 */
router.post("/", createCategorie);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Lister les catégories
 *     tags: [Categories]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des catégories
 */
router.get("/", getCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Catégorie trouvée
 *       404:
 *         description: Non trouvée
 */
router.get("/:id", getCategorie);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Supprimée
 */
router.delete("/:id", deleteCategorie);


export default router;
