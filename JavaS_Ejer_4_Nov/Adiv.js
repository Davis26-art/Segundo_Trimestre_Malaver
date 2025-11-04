console.log('=== Promedio de Números ===');
let numeros = [5, 7, 8, 9, 10];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

let promedio = suma / numeros.length;
console.log(`Los números son: ${numeros}`);
console.log(`El promedio es: ${promedio}`);
console.log('=== Contador ===');
let contador = 1;

while (contador <= 10) {
  console.log(`Número: ${contador}`);
  contador++;
}

console.log('Fin del conteo.');
console.log('=== Adivina el Número ===');
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento = 7;

if (intento === numeroSecreto) {
  console.log('🎉 ¡Adivinaste el número!');
} else if (intento > numeroSecreto) {
  console.log(`El número secreto es menor que ${intento}`);
} else {
  console.log(`El número secreto es mayor que ${intento}`);
}

console.log(`El número secreto era: ${numeroSecreto}`);