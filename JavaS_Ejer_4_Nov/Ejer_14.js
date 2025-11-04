const fs = require('fs');
const archivodatos = 'datos.txt';

fs.writeFile(archivodatos, 'Hola Mundo', (err) => err ? console.error(err): console.log('Archivo creado con éxito')); 

