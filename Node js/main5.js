var fs=require("fs");

// create a readable stream

var readerStream=fs.createReadStream('input1.txt');

// create a writable stream

var writerStream=fs.createWriteStream('output1.txt');

//pipe the read and write operation

// read input.txt and write data to output.txt

readerStream.pipe(writerStream);

console.log("Program ended");