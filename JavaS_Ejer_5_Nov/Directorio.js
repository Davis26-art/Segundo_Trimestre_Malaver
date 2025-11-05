const fs = require('fs');
const archivo = 'contactos.txt';

// === FUNCIONES AUXILIARES ===

// Lee datos del usuario
function preguntar(pregunta, callback) {
    process.stdout.write(pregunta);
    process.stdin.once('data', data => callback(data.toString().trim()));
}

// Carga contactos desde el archivo TXT
function cargarContactos() {
    if (!fs.existsSync(archivo)) return [];
    const data = fs.readFileSync(archivo, 'utf8').trim();
    if (data === '') return [];
    return data.split('\n').map(linea => {
        const [nombre, telefono, email] = linea.split('|').map(v => v.trim());
        return { nombre, telefono, email };
    });
}

// Guarda contactos en el archivo TXT
function guardarContactos(contactos) {
    const contenido = contactos
        .map(c => `${c.nombre} | ${c.telefono} | ${c.email}`)
        .join('\n');
    fs.writeFileSync(archivo, contenido, 'utf8');
}

// === FUNCIONES PRINCIPALES ===

// Crear un contacto nuevo
function crearContacto(callbackFinal) {
    console.log("\n=== CREAR CONTACTO ===");
    preguntar("Nombre: ", nombre => {
        preguntar("Teléfono: ", telefono => {
            preguntar("Email: ", email => {
                const contactos = cargarContactos();
                contactos.push({ nombre, telefono, email });
                guardarContactos(contactos);
                console.log("✅ Contacto guardado correctamente.\n");
                callbackFinal();
            });
        });
    });
}

// Ver todos los contactos
function verContactos(callbackFinal) {
    const contactos = cargarContactos();
    console.log("\n=== LISTA DE CONTACTOS ===");
    if (contactos.length === 0) {
        console.log("No hay contactos guardados.");
    } else {
        contactos.forEach((c, i) => {
            console.log(`${i + 1}. ${c.nombre} | 📞 ${c.telefono} | ✉️ ${c.email}`);
        });
    }
    console.log("==========================\n");
    callbackFinal();
}

// Buscar contacto por nombre
function buscarContacto(callbackFinal) {
    preguntar("Introduce el nombre a buscar: ", nombre => {
        const contactos = cargarContactos();
        const encontrados = contactos.filter(c =>
            c.nombre.toLowerCase().includes(nombre.toLowerCase())
        );

        if (encontrados.length === 0) {
            console.log("❌ No se encontraron contactos con ese nombre.\n");
        } else {
            console.log("\n=== RESULTADOS ===");
            encontrados.forEach(c => {
                console.log(`- ${c.nombre} | 📞 ${c.telefono} | ✉️ ${c.email}`);
            });
            console.log("==================\n");
        }
        callbackFinal();
    });
}

// Eliminar contacto
function eliminarContacto(callbackFinal) {
    const contactos = cargarContactos();
    if (contactos.length === 0) {
        console.log("No hay contactos para eliminar.");
        return callbackFinal();
    }

    verContactos(() => {
        preguntar("Introduce el número del contacto a eliminar: ", indiceStr => {
            const indice = parseInt(indiceStr) - 1;
            if (indice >= 0 && indice < contactos.length) {
                const eliminado = contactos.splice(indice, 1)[0];
                guardarContactos(contactos);
                console.log(`🗑️ Contacto '${eliminado.nombre}' eliminado.\n`);
            } else {
                console.log("❌ Número inválido.\n");
            }
            callbackFinal();
        });
    });
}

// === MENÚ PRINCIPAL ===
function menu() {
    console.log("=== DIRECTORIO DE CONTACTOS ===");
    console.log("1. Crear contacto");
    console.log("2. Ver contactos");
    console.log("3. Buscar contacto");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");

    preguntar("Selecciona una opción: ", opcion => {
        switch (opcion) {
            case "1":
                crearContacto(menu);
                break;
            case "2":
                verContactos(menu);
                break;
            case "3":
                buscarContacto(menu);
                break;
            case "4":
                eliminarContacto(menu);
                break;
            case "5":
                console.log("👋 Saliendo...");
                process.exit(0);
                break;
            default:
                console.log("❌ Opción no válida.\n");
                menu();
        }
    });
}

// === INICIO DEL PROGRAMA ===
process.stdin.resume();
menu();
