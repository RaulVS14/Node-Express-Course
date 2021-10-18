const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome!');
    } else if (req.url === '/about') {
        res.end('Here is about us');
    } else {
        res.end('<h1>404</h1><p>Page you are looking for isn\'t here</p> <a href="/">Go back home!</a>');
    }

});
server.listen(5000);
