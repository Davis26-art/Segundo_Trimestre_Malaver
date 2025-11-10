class Direccion {
  constructor(calle, codigoPostal) {
    this.calle = calle;
    this.codigoPostal = codigoPostal;
  }
}
class Cliente {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
  }
  mostrarUbicacion() {
    console.log(`${this.nombre} vive en ${this.direccion.calle}, CP ${this.direccion.codigoPostal}`);
  }
}
const direccion1 = new Direccion("Av. Central 123", "10001");
const cliente1 = new Cliente("Juan Pérez", direccion1);
cliente1.mostrarUbicacion();
