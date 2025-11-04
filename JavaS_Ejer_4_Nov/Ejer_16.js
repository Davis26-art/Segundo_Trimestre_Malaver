const fs = require('fs');
const archivodatos = 'datos.txt';

fs.readFile(archivodatos, 'utf8', (err, data) => {
    console.log(data);
});