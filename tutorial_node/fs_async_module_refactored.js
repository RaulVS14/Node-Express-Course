const {readFile, writeFile} = require('fs').promises;
const path = require("path");
const filePath = `${path.resolve(__dirname)}/content/first.txt`;
const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     })
// }
// getText(filePath).then(result => console.log(result)).catch(err => console.log(err));

const start = async () => {
    try {
        // const first = await getText(filePath);
        const second = await readFile(filePath, 'utf8');
        // console.log(first);
        console.log(second);
        await writeFile(`${path.resolve(__dirname)}/content/result-async.txt`, `RESULT: SYNCED INTO THE FILE -- ${second}`);

    } catch (error) {
        console.log(error);
    }
}
start();