/**
 * Self events
 * 
 * Implementation of events with javascript code
 */
const Emitter = require('./emitter');

const emitter = new Emitter();

emitter.on('save', () => {
    console.log('On save actived 1');
});

emitter.on('save', () => {
    console.log('On save actived 2');
});

emitter.emit('save');