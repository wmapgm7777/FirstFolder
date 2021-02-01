const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged',function(){
    console.log('Listener called');
})

// Raise an event
emitter.emit('messageLogged');
// Making a noise, produce -

// Register a listener
emitter.on('messageLogged2',function(arg){  // e, eventArg
    console.log('Listener 2 called', arg);
})

// Raise an event
emitter.emit('messageLogged2' , {id: 1, url:'https://'});

// use loggerevent.js

const LoggerEvent = require('./loggerevent');
const loggerevent = new LoggerEvent();

// Register a listener error function
loggerevent.on('messageLogged3', (arg) => {  // e, eventArg
    console.log('Listener 3 called', arg);
})

loggerevent.sendevent('logger message ');


