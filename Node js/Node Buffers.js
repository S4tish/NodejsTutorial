// Node.js Buffers

// Node.js provides Buffer class to store raw data similar to an array of integer but corresponds
//  to a raw memory allocation outside the v8 heap.Buffer class is used because pure Javascript is not 
// nice to binary data.So when dealing with TCP streams or the file system, its necessary to handle
// octet streams

// Buffer class is a global class.It can be accessed in application without importing buffer module

// Node.js Creating Buffers

// There are many ways to construct a Node buffer.Following are the three mostly used methods

// 1 create an uninitiated buffer: Following is the syntax of creating an uninitiated buffer of 10
// octets
// var buf=new Buffer(10);

// 2 Create a buffer from array: Following is the syntax to create a Buffer from a given array
// var buf=new Buffer([10,20,30,40,50]);

// 3 Create a buffer from string: Following is the syntax to create a Buffer from a given string
// and optionally encoding type:
// var buf=new Buffer("Simply Easy Learning","utf-8");

// Node.js Writing to buffers

// Following is the method to write into a Node buffer
// syntax
// buf.write(string[,offset][,length][,encoding])

// parameter explanation

// string: It specifies the string data to be written to buffer

// offset: It specifies the index of the buffer to start writing at.Its default value is 0

// length: It specifies the number of bytes to write.Defaults to buffer.length

// encoding: Encoding to use.'utf8' is the default encoding

// Return values from writing buffers

// This method is used to return number of octets written.In the case of space shortage for
// buffer to fit the entire string, It will write a part of the string

// Node.js Reading from buffer
// following is the method to read data from a Node buffer

// syntax
// buf.toString([encoding][,start][,end])

// parameter explanation

// 1 encoding: It specifies encoding to use. 'utf8' is the default encoding

// 2 start: It specifies beginning index to start reading defaults to 0

// 3 end: it specifies end index to end reading, defaults is complete buffer

// Return values reading from buffers

// this method decodes and return a string from buffer data encoded using the specifies character
// set encoding