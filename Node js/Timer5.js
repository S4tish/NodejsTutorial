// Node.js SetInterval(), setTimeout() and clearTimeout()

// Let see an example to use clearTimeout() function

function welcome(){
    console.log("Welcome satish singh");
}

var id1=setTimeout(welcome,1000);

var id2=setInterval(welcome,1000);

// clearTimeout(id1);

clearInterval(id2);