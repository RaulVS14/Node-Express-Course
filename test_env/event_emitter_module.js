const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on('response', (message, code) => {
    console.log(`data received: ${message} ${code}`);
});
customEmitter.on('response', () => {
    console.log(`data received well`);
})
customEmitter.emit('response', 'Cool things', 200);