const fs = require('fs');
const archivodatos = 'datos.txt';

fs.unlink(archivodatos, (err) => {
    if (err) throw err;
    console.log('Archivo eliminado con éxito');
}); 