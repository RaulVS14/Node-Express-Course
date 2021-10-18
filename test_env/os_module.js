
// CURRENT USER INFO
const os = require('os');
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
const user = os.userInfo();

console.log("=== USER INFO ===");
console.log(user);
console.log(`=== SYSTEM UPTIME: ${os.uptime()} seconds === `);
console.log("=== SYSTEM INFO ===");
console.log(currentOS);