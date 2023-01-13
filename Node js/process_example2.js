// Let see another process example o print command line arguments.Here node is considered as the
// first arguments , filename is considered as the second arguments and actual command line
// arguments

process.argv.forEach((value,index,array)=>{
    console.log(`${index}:${value}`);
});

// Node js Process Functions

// A list of commonly used Node js Process function are given below

// 1 cwd() = Return path of current working directory

// 2 hrtime() = return the current high-resolution real time in a [seconds, nanoseconds] array

// 3 memoryUsage() = return an object having information o memory Usage

// 4 process.kill(pid[,signal]) = is used to kill the given pid

// 5 uptime() = return the Node.js process uptime in seconds

