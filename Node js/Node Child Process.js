// Node js Child process

// The Node.js child process provides the ability to spawn child processes in a similar manner to open(3)

// There are three major way to create child process

// 1 child_process.exec() method : This method runs a command in a console and buffers the output

// 2 child_process.spawn() method: This method launches a new process with a given command

// 3 child_process.fork() method : This method is a special case of spawn() method to create child
// processes


// Node.js child_process.exec() method:

// The child_process.exec() method runs a  command in a console and buffers the output

// syntax
// child_process.exec(command[,options],callback)

// Parameters 
// 1 command: It specifies the command to run, with space-separated arguments 

// 2 options: It may contain one or more of the following options 

// cwd: It specifies the current working directory of the child process

// env: It specifies environment key value pairs

// encoding: String 

// shell: It specifies string shell to execute the command with 

// timeout: Number (Default:0)

// maxBuffer: Number (Default: 200*1024)

// KillSignal: String (Default: 'SIGTERM)

// uid Number: Sets the user identity of the process

// gid Number : Sets the group identity of the process

// callback: The callback function specifies three arguments error,stdout and stderr which is called
// with the following output when process terminates