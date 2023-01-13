// In Node.js application Events and Callbacks concept are used to provide concurrency. As Node.js
// application are single threaded and every API of Node js asynchronous .So it uses async function to maintain
// the concurrency.Node uses observer pattern.Node thread keeps an event loop and after the completion
// of any task ,it fires the corresponding event which signals the event listener to get executed

// Event Driven Programming
// Node.js uses event driven programming.It means as soon as Node start its server,it simply 
// initiates its variable declares function and then simply waits for event to occur .It is the one 
// if the reason why Node.js is pretty fast compared to other similar technologies

// there is a main loop in the event driven application that listens for events amd then trigger a 
// callback function when one of these events is detected 


// Difference between Events and callback
// Although Events and callback look similar but the differences lies in the fact that callback function
// are called when an asynchronous function return its result where as event handling works on the
// observer pattern.Whenever an event gets fired its listener function starts executing.Node.js has 
// multiple in-built events available through events module and EventEmitter class which is used 
// to bind and event listeners