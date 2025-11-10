// eliminarArchivo.js
const fs = require("fs");

if (fs.existsSync("datos.txt")) {
  fs.unlink("datos.txt", (err) => {
    if (err) console.error("Error al eliminar:", err);
    else console.log("🗑️ Archivo eliminado correctamente.");
  });
} else {
  console.log("⚠️ El archivo no existe.");
}
