const name = require('./names');
const sayHi = require('./utils');
const amount = 12;
const greeting = "Hello, World!";
const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
require('./os_module');
require('./path_module');
console.log('=== SYNC FS MODULE ===');
require('./fs_sync_module');
console.log('=== ASYNC FS MODULE ===');
require('./fs_async_module');
// =======
require('./trick_file'); // Executes

console.log('=== REFACTORED ASYNC FS MODULE ===');
require('./fs_async_module_refactored');
console.log("=== CHECK NUMBER ===");
console.log(amount > 10 ? "Large number" : "Small number");
console.log("=== GREETING ===");

for (let i = 1; i <= greeting.length; i++) {
    console.log(greeting.slice(0, i));
}

sayHi(name);
console.log(newItems);