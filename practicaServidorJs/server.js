import http from 'http';
import fs from 'fs';

const port = 3000;
const FILE = 'registro.txt';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const volver = `<br><a href="/inicio">Volver</a>`;

    if (req.url === '/' || req.url === '/inicio') {
        return res.end(`
            <h1>CRUD con FS</h1>
            <ul>
                <li><a href="/crear">Crear</a></li>
                <li><a href="/agregar">Agregar</a></li>
                <li><a href="/leer">Leer</a></li>
                <li><a href="/actualizar">Actualizar</a></li>
                <li><a href="/eliminar">Eliminar</a></li>
            </ul>
        `);
    }

    if (req.url === '/crear') {
        if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, 'Inicio del registro\n');
        return res.end(`<h2>Archivo creado</h2>${volver}`);
    }

    if (req.url === '/agregar') {
        const linea = `Actividad: ${new Date().toISOString()}\n`;
        fs.appendFileSync(FILE, linea);
        return res.end(`<h2>Línea agregada</h2><pre>${linea}</pre>${volver}`);
    }

    if (req.url === '/leer') {
        if (!fs.existsSync(FILE)) return res.end(`<h2>No existe archivo</h2>${volver}`);
        return res.end(`<h2>Contenido:</h2><pre>${fs.readFileSync(FILE, 'utf8')}</pre>${volver}`);
    }

    if (req.url === '/actualizar') {
        const nuevo = `ACTUALIZADO\n${new Date().toISOString()}\n`;
        fs.writeFileSync(FILE, nuevo);
        return res.end(`<h2>Archivo actualizado</h2><pre>${nuevo}</pre>${volver}`);
    }

    if (req.url === '/eliminar') {
        if (fs.existsSync(FILE)) fs.unlinkSync(FILE);
        return res.end(`<h2>Archivo eliminado (si existía)</h2>${volver}`);
    }

    res.end(`<h2>404</h2>Ruta no encontrada.${volver}`);
});

server.listen(port, () => console.log(`http://localhost:${port}`));
