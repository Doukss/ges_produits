import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

import categorieRoutes from "./routes/categorie.routes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

/* SWAGGER */
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/*ROUTES API */
app.use("/api/categories", categorieRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* 404 */
app.use(notFound);

/* ERROR HANDLER */
app.use(errorHandler);

export default app;
