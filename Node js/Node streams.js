// Node.js streams

// Streams are the objects that facilitate you to read data from a source and write data to a d
// destination.There are four types of streams in Node.js

// 1 Readable: This stream is used for read operations

// 2 Writable: This stream is used for write operations

// 3 Duplex: This stream can be used for both read and write operations 

// 4 Transform: It is type of duplex stream where the output is computed according to input

// Each type of stream is an Event emitter instance and throws several events at different times
// Following are some commonly used events

// 1 Data: This event is fired when there is data available to read

// 2 End: This event is fired when there is no more data available to read

// 3 Error: This event is fired when there is any error receiving or writing data

// 4 Finish: This event is fired when all data has been flushed to underlying system