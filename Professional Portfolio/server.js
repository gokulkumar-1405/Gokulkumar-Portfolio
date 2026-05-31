const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.argv[2] || process.env.PORT || 5500);
const root = __dirname;

const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp"
};

const server = http.createServer((req, res) => {
    const requestPath = decodeURIComponent(new URL(req.url, `http://127.0.0.1:${port}`).pathname);
    const cleanPath = path.normalize(requestPath).replace(/^([/\\])+/, "");
    const filePath = path.join(root, cleanPath || "index.html");

    if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(404);
            res.end("Not found");
            return;
        }

        res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
        res.end(data);
    });
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Portfolio running at http://127.0.0.1:${port}/index.html`);
});
