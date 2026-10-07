require("dotenv").config();

const path = require("path");
const express = require("express");
const connectDB = require("./src/config/database");
const productosRoutes = require("./src/routes/productos");
const authRoutes = require("./src/routes/auth");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");

const app = express();
const PORT = process.env.PORT || 4000;

// Conectar base de datos
connectDB();

// Middleware
app.use(express.json());

// Página de inicio (public/index.html), la que vigila UptimeRobot
app.use(express.static(path.join(__dirname, "public")));

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/productos", productosRoutes);

// En Vercel no se usa listen; solo en local
if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Server running at:  http://localhost:${PORT}`);
    console.log(`Swagger docs at:    http://localhost:${PORT}/api-docs`);
  });
}

module.exports = app;