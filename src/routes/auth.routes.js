import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion (test JWT)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT
 */
router.post("/login", (req, res) => {
  const { email } = req.body;

  // ⚠️ TEST SIMPLE (pas encore vraie auth)
  const token = jwt.sign(
    { id: 1, email, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;