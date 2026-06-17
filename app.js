const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Aplikasi berhasil berjalan!\n');
});

// Server berjalan pada port 8080
server.listen(8080, () => {
    console.log('Server aktif di port 8080');
});
