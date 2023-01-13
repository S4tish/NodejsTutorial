// In Node.js file I/O is provided by simple wrappers around standard POSIX function.Node File
// system module can be imported using following syntax

// syntax
var fs=require("fs");

// Node.js FS Reading File
// Every method in fs module has synchronous and asynchronous forms
// asynchronous methods take a last parameter as completion function callback.Asynchronous method 
// is preferred over synchronous method because it never blocks the program execution where as the
// synchronous method blocks

// Node.js Open a file

// Syntax
// Following is the syntax of the method to open a file in asynchronous mode
fs.open(path,flags[mode],callback)

// parameter explanation
// Following is the syntax of the method to open a file in asynchronous mode

// 1 path = This is  a string having file name including path

// 2 flags = Flag specifies the behavior of the file to be opened.All possible values have been
// mentioned below

// 3 mode = This sets the file mode but only if the file was created .It default to 0666 readable
// and writable

// 4 callback = This is the callback function which gets two arguments (err,fd)

// Node.js Flags for Read/write 
// Following is a list of flags 