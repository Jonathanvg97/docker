import { pool } from '../database.js';

const AnimalModel = {
  // Obtener todos los animales de la base de datos.
  getAll: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM animales');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Agregar un nuevo animal a la base de datos.
  create: async (newAnimal) => {
    try {
      const { nombre, especie, edad } = newAnimal;
      const [result] = await pool.query('INSERT INTO animales (nombre, especie, edad) VALUES (?, ?, ?)', [nombre, especie, edad]);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default AnimalModel;
