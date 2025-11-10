// actualizarArchivo.js
const fs = require("fs");

const nuevoTexto = "\nLínea agregada con fs.appendFile()";

fs.appendFile("datos.txt", nuevoTexto, (err) => {
  if (err) console.error("Error al actualizar:", err);
  else console.log("📝 Archivo actualizado correctamente.");
});
