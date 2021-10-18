const {createReadStream} = require('fs');
const path = require("path");
const stream = createReadStream(`${path.resolve(__dirname)}/content/result-big.txt`);
// encoding: utf8 - to get readable data
// highWaterMark - to define buffer size for read chunks
stream.on('data',(result)=>{
    console.log(result);
});
const stream2 = createReadStream('apple.txt');
stream2.on('error', (err)=>{
    console.log(err);
})