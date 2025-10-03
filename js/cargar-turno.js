const formulario = document.getElementById('form-turno');
  const lista = document.getElementById('lista-turnos');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    console.log("Turno válido:", nombre, fecha, hora);

      const item = document.createElement('li');

      // Crear span para mostrar el contenido
      const contenido = document.createElement('span');
      contenido.textContent = nombre + " - " + fecha + " a las " + hora;

      // Contenedor para botones
      const contenedorBotones = document.createElement('div');
      contenedorBotones.className = 'acciones';

      // Crear botón de editar
      const btnEditar = document.createElement('button');
      btnEditar.className = 'btnEditar';
      btnEditar.textContent = 'Modificar';
      btnEditar.addEventListener('click', () => {
        // Poner los datos en los campos del formulario para editar
        document.getElementById('nombre').value = nombre;
        document.getElementById('fecha').value = fecha;
        document.getElementById('hora').value = hora;

        // Eliminar el elemento para que se vuelva a agregar con cambios
        lista.removeChild(item);
      });

      // Crear botón de eliminar
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.className = 'btnEliminar';
      btnEliminar.addEventListener('click', () => {
        lista.removeChild(item);
      });

      // Agregar botones al contenedor
      contenedorBotones.appendChild(btnEditar);
      contenedorBotones.appendChild(btnEliminar);

      // Agregar botones y contenido al li
      item.appendChild(contenido);
      item.appendChild(contenedorBotones);
      

      lista.appendChild(item);
      formulario.reset();}
);

