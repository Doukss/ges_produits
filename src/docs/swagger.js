import swaggerJSDoc from "swagger-jsdoc";


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Gestion Produit",
      version: "1.0.0",
      description: "Documentation de l’API Gestion Produit",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Serveur local",
      },
    ],
  },


  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Gestion Produit",
      version: "1.0.0",
      description: "Documentation de l’API Gestion Produit",
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "Serveur local",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  
  
    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
