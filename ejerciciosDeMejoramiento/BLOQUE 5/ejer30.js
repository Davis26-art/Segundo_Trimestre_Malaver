export function sumar(a, b) { return a + b; }
export function sumarDoble(a, b) { return (a + b) * 2; }

import { sumar as sumaSimple, sumarDoble as sumaConMultiplicador } from './calculosAvanzados.js';
console.log(sumaConMultiplicador(5, 5));
