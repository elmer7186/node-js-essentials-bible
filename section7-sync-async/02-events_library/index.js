/**
 * EventEmitter
 * 
 * Implementation of event emitter with EventEmitter
 */
const { EventEmitter } = require('events');
const { SAVE } = require('./event-names.js');

const emitter = new EventEmitter();

emitter.on(SAVE, () => {
    console.log('On save actived 1');
});

emitter.on(SAVE, () => {
    console.log('On save actived 2');
});

emitter.emit(SAVE);