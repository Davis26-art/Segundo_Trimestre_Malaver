class AutoVelocidad {
  constructor(marca, velocidad) {
    this.marca = marca;
    this._velocidad = velocidad;
  }
  set velocidad(v) {
    if (v >= 0) this._velocidad = v;
    else console.log("Velocidad inválida");
  }
  get velocidad() {
    return this._velocidad;
  }
}
const ford = new AutoVelocidad("Ford", 80);
ford.velocidad = 120;
console.log(ford.velocidad);
