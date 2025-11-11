// integrador3_estudiantes.js
const fs = require("fs");
const archivo = "estudiantes.json";

// Crea el archivo si no existe
if (!fs.existsSync(archivo)) {
  fs.writeFileSync(archivo, JSON.stringify([]));
}

// Leer estudiantes
function leerEstudiantes() {
  const data = fs.readFileSync(archivo, "utf8");
  return JSON.parse(data);
}

// Guardar estudiantes
function guardarEstudiantes(lista) {
  fs.writeFileSync(archivo, JSON.stringify(lista, null, 2));
}

// Agregar nuevo estudiante
function agregarEstudiante(nombre, edad, promedio) {
  const estudiantes = leerEstudiantes();
  estudiantes.push({ nombre, edad, promedio });
  guardarEstudiantes(estudiantes);
  console.log(`✅ Estudiante agregado: ${nombre}`);
}

// Mostrar lista
function listarEstudiantes() {
  const estudiantes = leerEstudiantes();
  console.log("\n📚 Lista de Estudiantes:");
  estudiantes.forEach((e, i) => console.log(`${i + 1}. ${e.nombre} — Edad: ${e.edad}, Promedio: ${e.promedio}`));
}

// Actualizar promedio
function actualizarPromedio(nombre, nuevoPromedio) {
  const estudiantes = leerEstudiantes();
  const estudiante = estudiantes.find(e => e.nombre === nombre);
  if (estudiante) {
    estudiante.promedio = nuevoPromedio;
    guardarEstudiantes(estudiantes);
    console.log(`📝 Promedio actualizado para ${nombre}: ${nuevoPromedio}`);
  } else {
    console.log("⚠️ Estudiante no encontrado.");
  }
}

// Pruebas
agregarEstudiante("Ana", 19, 4.5);
agregarEstudiante("Carlos", 22, 3.8);
listarEstudiantes();
actualizarPromedio("Carlos", 4.0);
listarEstudiantes();
