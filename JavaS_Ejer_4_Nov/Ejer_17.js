const fs = require('fs');
const archivodatos = 'datos.txt';

fs.readFile(archivodatos, 'utf8', (err, datos) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
    }

    const nuevoContenido = datos + new Date().toLocaleString();
    fs.writeFile(archivodatos, nuevoContenido, (err) => {
        if (err) {
            console.log('Error al guardar', err);
        } else {
            console.error('Archivo editado');
        }

    });
})