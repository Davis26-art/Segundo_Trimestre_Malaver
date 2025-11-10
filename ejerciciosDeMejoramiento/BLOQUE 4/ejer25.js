class BaseDeDatos {
  constructor(url) {
    if (BaseDeDatos.instancia) return BaseDeDatos.instancia;
    this.url = url;
    BaseDeDatos.instancia = this;
  }
}
const db1 = new BaseDeDatos("servidor_prod");
const db2 = new BaseDeDatos("servidor_test");
console.log(db1 === db2); // true
