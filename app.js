const http = require('http');
const {readFileSync, createReadStream} = require("fs");
const path = require("path");
const server = http.createServer();
server.on('request', (req, res) => {
    const filePath = `${path.resolve(__dirname)}/test_env/content/result-big.txt`;
    // const text = readFileSync(filePath, 'utf8');
    // res.end(text);
    const fileStream = createReadStream(filePath, 'utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(`err: ${err}`);
    })
})

server.listen(5000, () => {
    console.log('Server running');
})