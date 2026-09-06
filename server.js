/**
 * Portfolio Local Web Server
 * Muhammad Mubashir Farooq - Portfolio
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = process.env.PORT || 3000;

// Try using Express if installed, otherwise fallback seamlessly to Node's HTTP module
let app;
try {
    const express = require('express');
    app = express();
    app.use(express.static(path.join(__dirname)));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
    app.listen(PORT, () => {
        console.log('\n====================================================');
        console.log(`🚀 Portfolio Server (Express) running at:`);
        console.log(`👉 http://localhost:${PORT}`);
        console.log('====================================================\n');
    });
} catch (e) {
    // Built-in zero-dependency HTTP server fallback
    const MIME_TYPES = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
    };

    const server = http.createServer((req, res) => {
        let reqPath = decodeURIComponent(req.url.split('?')[0]);
        let filePath = path.join(__dirname, reqPath === '/' ? 'index.html' : reqPath);
        const extname = path.extname(filePath);
        let contentType = MIME_TYPES[extname] || 'application/octet-stream';

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    fs.readFile(path.join(__dirname, 'index.html'), (err, fallbackContent) => {
                        if (err) {
                            res.writeHead(404);
                            res.end('404 Not Found');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(fallbackContent, 'utf-8');
                        }
                    });
                } else {
                    res.writeHead(500);
                    res.end(`Server Error: ${error.code}`);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    });

    server.listen(PORT, () => {
        process.stdout.write('\n====================================================\n');
        process.stdout.write(`🚀 Portfolio Server running at http://localhost:${PORT}\n`);
        process.stdout.write('====================================================\n\n');
    });
}
