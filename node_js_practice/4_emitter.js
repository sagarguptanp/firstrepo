const EventEmitter = require('events');

const eventEmit = new EventEmitter.EventEmitter();

var handleEvent1 = function(){
    console.log("Event Handler 1");
}

var handlrEvent2 = function(){
    console.log("Event handler 2");
}

eventEmit.on("handler1",handleEvent1);
eventEmit.on("handler2",handlrEvent2);

eventEmit.emit("handler1");
eventEmit.emit("handler2");


