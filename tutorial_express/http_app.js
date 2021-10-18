const http = require('http');
const {readFileSync} = require('fs');
const appFolder = './navbar-app';
const homePage = readFileSync(`${appFolder}/index.html`, 'utf8');
const styles = readFileSync(`${appFolder}/styles.css`, 'utf8');
const script = readFileSync(`${appFolder}/browser-app.js`, 'utf8');
const logo = readFileSync(`${appFolder}/logo.svg`, 'utf8');
const favicon = readFileSync(`${appFolder}/favicon.ico`, 'utf8');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(homePage);
        res.end(); // must always be called, because it will signal to the server that connection was completed
    } else if (req.url === '/styles.css') {
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        res.write(styles);
        res.end()
    } else if (req.url === '/browser-app.js') {
        res.writeHead(200, {
            'content-type': 'application/js'
        })
        res.write(script);
        res.end();
    } else if (req.url === '/logo.svg') {
        res.writeHead(200, {
            'content-type': 'image/svg+xml'
        })
        res.write(logo);
        res.end();
    } else if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'content-type': 'text/x-icon'
        })
        res.write(favicon)
        res.end()
    } else if (req.url === '/about.html') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('')
        res.end()
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1><a href="/">Homepage</a>')
    }
});

server.listen(5000);