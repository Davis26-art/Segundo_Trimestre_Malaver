class VehiculoElectrico extends Auto {
  constructor(marca, modelo, autonomia) {
    super(marca, modelo);
    this.autonomia = autonomia;
  }
}
const tesla = new VehiculoElectrico("Tesla", "Model 3", 500);
console.log(tesla.obtenerDescripcion(), "Autonomía:", tesla.autonomia);
