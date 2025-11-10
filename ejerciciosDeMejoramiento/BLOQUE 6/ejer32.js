// leerArchivo.js
const fs = require("fs");

fs.readFile("datos.txt", "utf8", (err, data) => {
  if (err) console.error("❌ Error al leer:", err);
  else console.log("📖 Contenido del archivo:\n" + data);
});
