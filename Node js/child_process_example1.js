// Node.js child_process.exec() example 1

// Lets see the simple process example to print architecture , pid,platform and version of the 
// process

const exec=require('child_process').exec;

exec('my.bat', (err,stdout,stderr)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(stdout);
});