// crudCompleto.js
const fs = require("fs");
const archivo = "registro.txt";

// CREAR
fs.writeFileSync(archivo, "Registro inicial\n");
console.log("✅ Archivo creado.");

// LEER
let contenido = fs.readFileSync(archivo, "utf8");
console.log("📄 Contenido inicial:\n", contenido);

// ACTUALIZAR
fs.appendFileSync(archivo, "Nueva línea agregada.\n");
console.log("📝 Archivo actualizado.");

// LEER NUEVAMENTE
contenido = fs.readFileSync(archivo, "utf8");
console.log("📄 Contenido actualizado:\n", contenido);

// ELIMINAR
fs.unlinkSync(archivo);
console.log("🗑️ Archivo eliminado.");
