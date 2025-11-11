// integrador2_inventario.js

class Producto {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  valorTotal() {
    return this.cantidad * this.precio;
  }

  mostrarInfo() {
    return `${this.nombre} — Cantidad: ${this.cantidad}, Precio: $${this.precio}, Total: $${this.valorTotal()}`;
  }
}

class Inventario {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
    console.log(`✅ Producto agregado: ${producto.nombre}`);
  }

  listarInventario() {
    console.log("\n📦 Inventario Actual:");
    this.productos.forEach(p => console.log(p.mostrarInfo()));
  }

  calcularValorTotal() {
    let total = this.productos.reduce((acum, p) => acum + p.valorTotal(), 0);
    console.log(`💰 Valor total del inventario: $${total}`);
  }
}

// Prueba del sistema
const inventario = new Inventario();
inventario.agregarProducto(new Producto("Cuaderno", 10, 2500));
inventario.agregarProducto(new Producto("Lápiz", 20, 800));
inventario.listarInventario();
inventario.calcularValorTotal();
