console.log('Hola Mundo')
console.log('Calculadora en Node')
console.log('Estas son las opciones a escoger: ')
console.log('1. Suma')
console.log('2. Resta')
console.log('2. Multiplicacion')
console.log('3. Multiplicacion')
console.log('4. Division')
console.log('Escoge la operación que quieres realizar: ')

let num1 = parseInt(6);
console.log(num1);
let num2 = parseInt(7);
console.log(num2);

let opcion = 2;
let nombre_opcion;

opcion = 4;
switch (opcion) {
    case 1:
        nombre_opcion = 'Suma';
        console.log('Suma:' + (num1 + num2));
        break;

    case 2: nombre_opcion = 'Resta';
        console.log('Resta:' + (num1 - num2));
        break;

    case 3: nombre_opcion = 'Multiplicación';
        console.log('Multiplicacion:' + (num1 * num2));
        break;

    case 4: nombre_opcion = 'División';
        console.log('Division:' + (num1 / num2));
        break;
}