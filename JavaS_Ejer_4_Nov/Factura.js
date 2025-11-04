const fs = require('fs');

// Función para calcular IVA y total
function calcularTotal(subtotal, ivaPorcentaje) {
    const iva = subtotal * (ivaPorcentaje / 100);
    const total = subtotal + iva;
    return { iva, total };
}

// Función para leer entrada del usuario
function preguntar(pregunta, callback) {
    process.stdout.write(pregunta);
    process.stdin.once('data', data => {
        callback(data.toString().trim());
    });
}

// Función para crear una factura
function crearFactura(callbackFinal) {
    console.log("=== CREAR FACTURA ===");

    preguntar("Nombre del cliente: ", cliente => {
        preguntar("Número de productos: ", numProductosStr => {
            const numProductos = parseInt(numProductosStr);
            let subtotal = 0;
            let detalles = "";
            let contador = 0;

            function pedirProducto() {
                if (contador >= numProductos) {
                    const ivaPorcentaje = 16;
                    const { iva, total } = calcularTotal(subtotal, ivaPorcentaje);

                    const factura = `
Factura para: ${cliente}
------------------------------
${detalles}
Subtotal: $${subtotal.toFixed(2)}
IVA (${ivaPorcentaje}%): $${iva.toFixed(2)}
Total: $${total.toFixed(2)}
==============================
`;

                    console.log(factura);
                    fs.appendFileSync("facturas.txt", factura, "utf8");
                    console.log("Factura guardada en facturas.txt");
                    callbackFinal();
                    return;
                }

                preguntar(`Nombre del producto ${contador + 1}: `, nombre => {
                    preguntar(`Precio del producto ${contador + 1}: `, precioStr => {
                        const precio = parseFloat(precioStr);
                        preguntar(`Cantidad del producto ${contador + 1}: `, cantidadStr => {
                            const cantidad = parseInt(cantidadStr);
                            const totalProducto = precio * cantidad;
                            subtotal += totalProducto;
                            detalles += `${nombre} - Precio: $${precio} x ${cantidad} = $${totalProducto}\n`;
                            contador++;
                            pedirProducto();
                        });
                    });
                });
            }

            pedirProducto();
        });
    });
}

// Función para ver todas las facturas
function verFacturas(callback) {
    if (!fs.existsSync("facturas.txt")) {
        console.log("No hay facturas guardadas.");
    } else {
        const contenido = fs.readFileSync("facturas.txt", "utf8");
        console.log("=== FACTURAS GUARDADAS ===");
        console.log(contenido);
    }
    callback();
}

// Función principal con menú
function menu() {
    console.log("\n=== MENU ===");
    console.log("1. Crear factura");
    console.log("2. Ver facturas");
    console.log("3. Salir");

    preguntar("Selecciona una opción: ", opcion => {
        switch (opcion) {
            case "1":
                crearFactura(menu);
                break;
            case "2":
                verFacturas(menu);
                break;
            case "3":
                console.log("Saliendo...");
                process.exit(0);
            default:
                console.log("Opción inválida. Intenta de nuevo.");
                menu();
        }
    });
}

// Ejecutar el menú
process.stdin.resume(); // Necesario para que stdin funcione
menu();
