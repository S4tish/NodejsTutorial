// import event module 

var events=require('events');

// create an eventEmitter object
var eventEmitter=new events.EventEmitter();

//create an event handler as follow
var connectHandler=function connected(){
    console.log('connection successful');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler 
eventEmitter.on('connection',connectHandler);

// Bind the data_received event with the anonymous function 
eventEmitter.on('data_received',function(){
    console.log('data_received successfully');
});
 
//Fire the connection event
eventEmitter.emit('connection');

console.log("program Ended");