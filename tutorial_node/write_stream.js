const {writeFileSync} = require('fs');

function writeToFile() {
    let count = 0;
    const path = require("path");
    while (count < 1000000) {
        writeFileSync(`${path.resolve(__dirname)}/content/result-big.txt`, `ROW ${count}\n`, {flag: 'a'});
        console.log(count ,`${path.resolve(__dirname)}/content/result-big.txt`);
        count++;
    }
}

writeToFile();