const {readFileSync, writeFileSync} = require('fs');
const path = require("path");
console.log('=== Reading Files Synchronously');
const first = readFileSync(`${path.resolve(__dirname)}/content/first.txt`, 'utf8');
console.log(first);
writeFileSync(`${path.resolve(__dirname)}/content/result-sync.txt`, `RESULT: SYNCED INTO THE FILE -- ${first}`);