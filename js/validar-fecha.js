  // Obtener la fecha actual en formato YYYY-MM-DD
  const hoy = new Date().toISOString().split("T")[0];
  // Asignar como mínimo al input
  document.getElementById("fecha").setAttribute("min", hoy);

