// Piping is a mechanism where output of one stream is used to another stream.There is no limit 
// on piping operation

// Lets take an example for reading from one file and writing to another file

var fs=require("fs");

// create a readable stream

var readerStream=fs.createReaderStream('input.txt');

// create a writable stream

var writerStream=fs.createWriterStream('output.txt');

//pipe the read and write operation

// read input.txt and write data to output.txt

readerStream.pipe(writerStream);

console.log("Program ended");