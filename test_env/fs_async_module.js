const {readFile, writeFile} = require('fs');
const path = require("path");
readFile(`${path.resolve(__dirname)}/content/first.txt`, {encoding: 'utf8'}, (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    writeFile(`${path.resolve(__dirname)}/content/result-async.txt`,`RESULT: (A)SYNCED INTO THE FILE -- ${result}`,{},(err, result)=>{
        if (err) {
            console.log(err);
            return
        }
        console.log(result);
    });
});
