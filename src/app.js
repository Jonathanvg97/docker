import express from "express";
import "./database.js";
import animalsRoutes from "./routes/animalsRoutes.js";

const app = express();

// Middleware para procesar JSON en las solicitudes.
app.use(express.json());


// Rutas de la API
app.use("/api", animalsRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola desde el servidor con Docker");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;
