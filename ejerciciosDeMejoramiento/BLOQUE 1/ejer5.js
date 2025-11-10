const TASA_IMPUESTO = 0.15;
let precio = Number(prompt("Ingrese el precio:"));
if (!isNaN(precio)) {
  let impuesto = precio * TASA_IMPUESTO;
  console.log(`Impuesto: ${impuesto.toFixed(2)}`);
} else {
  console.log("Entrada inválida");
}
