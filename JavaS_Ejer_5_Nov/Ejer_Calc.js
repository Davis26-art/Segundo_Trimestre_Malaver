console.log('ESTE ES MI EJERCICIO DE CALCULADORA......');

let num1 = 6;
let num2 = 7;

process.stdout.write('Qué operación deseas realizar (1.+, 2.-, 3.*, 4./): ');

process.stdin.once('data', data => {
  const operacion = parseInt(data.toString().trim());
  let nombreoperacion;

  switch (operacion) {
    case 1:
      nombreoperacion = 'Suma';
      console.log(`Suma: ${num1 + num2}`);
      break;

    case 2:
      nombreoperacion = 'Resta';
      console.log(`Resta: ${num1 - num2}`);
      break;

    case 3:
      nombreoperacion = 'Multiplicación';
      console.log(`Multiplicación: ${num1 * num2}`);
      break;

    case 4:
      nombreoperacion = 'División';
      console.log(`División: ${num1 / num2}`);
      break;

    default:
      console.log('❌ Opción no válida.');
      break;
  }

  console.log(`Operación seleccionada: ${nombreoperacion || 'ninguna'}`);
  process.exit(); // termina el programa
});
