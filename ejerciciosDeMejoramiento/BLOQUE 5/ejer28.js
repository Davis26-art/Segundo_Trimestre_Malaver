export const VERSION = "1.0.0";
export function saludarUsuario(nombre) {
  return `Hola ${nombre}. Versión ${VERSION}`;
}

import { VERSION, saludarUsuario } from './utilidades.js';
console.log(saludarUsuario("Ana"));
