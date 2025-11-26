import http from 'http';
import fs from 'fs';

const port = 3000;
const ARCHIVO = 'registro.txt';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (!fs.writeSync(ARCHIVO)) {
        fs.writeFileSync(ARCHIVO, 'Inicio de registro de actividades \n');
    }

    const nuevaLinea = `Nueva actividad: ${new Date().toISOString()}\n `;
    fs.appendFileSync(ARCHIVO, nuevaLinea);
    const contenido = fs.readFileSync(ARCHIVO, 'utf8');

    res.end(
        `<h1></h1>
        <h2></h2>
        <pre></pre>
        <p></p>
        <pre></pre>
        `
    );

});

server.listen(port, () => {
    console.log(`Servidor arriba en http://localhost:${port}`);
})