// Importar los módulos necesarios
const express = require('express');
const app = express();

// Definir el endpoint de la API
app.get('/api/inventario', (req, res) => {
  // Realizar consultas a la base de datos u otros servicios para obtener la información del inventario
  const inventario = obtenerInventario();

  // Verificar si se obtuvo información del inventario
  if (inventario.length > 0) {
    // Enviar la respuesta con la información del inventario
    res.status(200).json(inventario);
  } else {
    // Enviar un mensaje de error si no se encuentra información del inventario
    res.status(404).json({ mensaje: 'No se encontró información del inventario.' });
  }
});

// Función para obtener la información del inventario (ejemplo)
function obtenerInventario() {
  // Simulación de datos del inventario
  const inventario = [
    { id: 1, nombre: 'Mango', stock: 10 },
    { id: 2, nombre: 'Lulo', stock: 5 },
    { id: 3, nombre: 'Aguacate', stock: 15 }
  ];

  // Retornar el inventario
  return inventario;
}

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('API de inventario de frutos exóticos colombianos iniciada en el puerto 3000.');
});