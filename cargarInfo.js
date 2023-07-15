// Realizar una solicitud GET a la API
fetch('http://localhost:3000/api/inventario')
  .then(response => response.json())
  .then(data => {
    // Obtener la referencia al cuerpo de la tabla del inventario
    const inventarioBody = document.getElementById('inventarioBody');

    // Limpiar el contenido actual del cuerpo de la tabla
    inventarioBody.innerHTML = '';

    // Recorrer los elementos del inventario y agregarlos a la tabla
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nombre}</td>
        <td>${item.stock}</td>
      `;
      inventarioBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error al obtener el inventario:', error);
  });