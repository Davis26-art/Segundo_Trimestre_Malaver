console.log('=== Promedio de Números ===');
let numeros = [5, 7, 8, 9, 10];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

let promedio = suma / numeros.length;
console.log(`Los números son: ${numeros}`);
console.log(`El promedio es: ${promedio}`);