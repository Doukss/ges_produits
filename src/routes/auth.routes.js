import { Router } from "express";
import jwt from "jsonwebtoken";
import { validate } from "../middlewares/validate.js";
import { loginSchema } from "../validations/auth.schema.js";

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
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT
 */
router.post("/login", validate(loginSchema), (req, res) => {
  const { email, password } = req.body;

  // Dans une vraie application, on vérifierait les identifiants dans la base de données
  const token = jwt.sign(
    { id: 1, email, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;

