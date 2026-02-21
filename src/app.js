import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

import categorieRoutes from "./routes/categorie.routes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import produitRoutes from "./routes/produit.routes.js";
import fournisseurRoutes from "./routes/fournisseur.routes.js";
import authRoutes from "./routes/auth.routes.js";
import "dotenv/config";

const app = express();

app.use(express.json());

// Documentation Swagger
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route d'accueil
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Routes d'authentification
app.use("/auth", authRoutes);

// Routes de gestion des catégories
app.use("/api/categories", categorieRoutes);

// Routes de gestion des produits
app.use("/produits", produitRoutes);

// Routes de gestion des fournisseurs
app.use("/fournisseurs", fournisseurRoutes);



// Middleware pour les routes non trouvées
app.use(notFound);

// Middleware de gestion des erreurs
app.use(errorHandler);

export default app;
