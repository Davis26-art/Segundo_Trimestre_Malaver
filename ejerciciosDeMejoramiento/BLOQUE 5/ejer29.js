// Auto.js
export default class Auto {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  obtenerDescripcion() {
    return `${this.marca} ${this.modelo}`;
  }
}

// tienda.js
import Auto from './Auto.js';
const carro = new Auto("Nissan", "Sentra");
console.log(carro.obtenerDescripcion());
