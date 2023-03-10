// create a javascript file named main.js having the following code

var fs=require("fs");

var data='A solution of all technology';

// create a writable stream

var writerStream=fs.createWriteStream('output.txt');

// write the data to stream with encoding to be utf8

writerStream.write(data,'UTF8');

//Mark the end of file

writerStream.end();

//Handle stream events --> finish and error

writerStream.on('finish',function(){
    console.log("Write completed");
});

writerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("Program ended");