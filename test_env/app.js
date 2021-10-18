
const name = require('./names');
const sayHi = require('./utils');
const amount = 12;
const greeting = "Hello, World!";
require('./os_module');
require('./path_module');
console.log('=== SYNC FS MODULE ===');
require('./fs_sync_module');
console.log('=== ASYNC FS MODULE ===');
require('./fs_async_module');
// =======
require('./trick_file'); // Executes

console.log("=== CHECK NUMBER ===");
console.log(amount > 10 ? "Large number" : "Small number");
console.log("=== GREETING ===");

for (let i = 1; i <= greeting.length; i++) {
    console.log(greeting.slice(0, i));
}

sayHi(name);