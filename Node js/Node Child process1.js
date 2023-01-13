// Node.js child_process.fork() method

// The child_process.fork method is a special case of the spawn() to create Node processes
// This method return object with a built in communication channel in addition to having all the
// methods in a normal childprocess instance

// syntax
// child_process.fork(modulePath[,args][,options])

// Parameters 

// 1 modulePath: This is a string specifies the module to run in the child

// 2 args: It specifies an array List of string arguments

// 3 Options: It may contain one or more of the following options

// a cwd: It specifies the current working directory of the child process

// b env: It specifies environment key-value pairs

// c execPath: This is a string Executable used to create the child process

// d execArgv: It specifies Array List of string arguments passed to the executable

// e silent: Ir specifies Boolean if true, stdin,stdout and stderr of the child will be piped to 
// parent otherwise they will be inherited from the parent see the pipe and inherit options
// for spawn stdio for more details

// f uid Number: sets the user identity of the process

// g gid Number : sets the group identity of the process

