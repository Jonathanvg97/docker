import express from "express";
import AnimalModel from "../models/animalModel.js";

const router = express.Router();

// Ruta para obtener todos los animales.

router.get("/animals", async (req, res) => {
  try {
    const animals = await AnimalModel.getAll();
    
    // Verifica si la lista de animales está vacía y responde en consecuencia.
    if (animals.length === 0) {
      res.json([]); // Envía una lista vacía como respuesta.
    } else {
      res.json(animals);
    }
  } catch (error) {
    console.error("Error al obtener animales:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


// Ruta para agregar un nuevo animal.
router.post("/animals", async (req, res) => {
  const newAnimal = req.body;
  try {
    const result = await AnimalModel.create(newAnimal);
    res.json({
      message: "Animal agregado con éxito",
      animalId: result.insertId,
    });
  } catch (error) {
    console.error("Error al agregar un animal:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
