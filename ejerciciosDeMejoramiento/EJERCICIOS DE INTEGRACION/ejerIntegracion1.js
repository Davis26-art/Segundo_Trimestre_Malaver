// integrador1_tareas.js

let tareas = [];

// Agregar una tarea
function agregarTarea(nombre) {
  tareas.push(nombre);
  console.log(`✅ Tarea agregada: ${nombre}`);
}

// Listar todas las tareas
function listarTareas() {
  console.log("\n📋 Lista de tareas:");
  if (tareas.length === 0) console.log("No hay tareas registradas.");
  else tareas.forEach((t, i) => console.log(`${i + 1}. ${t}`));
}

// Eliminar una tarea por número
function eliminarTarea(indice) {
  if (indice > 0 && indice <= tareas.length) {
    let eliminada = tareas.splice(indice - 1, 1);
    console.log(`🗑️ Tarea eliminada: ${eliminada}`);
  } else {
    console.log("⚠️ Número de tarea inválido.");
  }
}

// Prueba del sistema
agregarTarea("Estudiar JavaScript");
agregarTarea("Revisar ejercicios de arrays");
listarTareas();
eliminarTarea(1);
listarTareas();
