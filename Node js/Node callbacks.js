// Node.js Callbacks

// Callback is an asynchronous equivalent for a function.It is called at the completion of each
// tsk.In Node.js callback are generally used,All API of Node are written in a way to support 
// callback .For example: when a function start reading file,it return the control to execution
// environment immediately so that the next instruction can be executed  

// In Node.js once the file I/O is complete it will call the callback function.So here is no blocking
// or wait for File I/O. This makes Node.js highly scalable,as it can process high number of request
// without waiting for any function to return result