// crearArchivo.js
const fs = require("fs");

fs.writeFile("datos.txt", "Archivo creado con Node.js\n", (err) => {
  if (err) console.error("Error al crear el archivo:", err);
  else console.log("✅ Archivo creado exitosamente.");
});
