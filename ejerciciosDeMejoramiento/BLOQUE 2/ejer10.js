function sumarArreglo(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) suma += arr[i];
  return suma;
}
console.log(sumarArreglo([100, 200, 300, 400, 500]));
