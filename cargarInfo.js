// Función para cargar los datos del inventario en la tabla
function cargarInventario(inventario) {
    const inventarioBody = document.getElementById('inventarioBody');

    inventario.forEach(producto => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.stock}</td>
      `;
      inventarioBody.appendChild(row);
    });
  }

  // Realizar la solicitud a la API para obtener el inventario
  fetch('/api/inventario')
    .then(response => response.json())
    .then(data => cargarInventario(data))
    .catch(error => console.log(error));