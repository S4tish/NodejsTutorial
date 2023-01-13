// A node js web application contains the following three parts

// 1 import required modules: The "require" directive is used to load a Node js module

// 2 Create server: You have to establish a server will listen to client request similar to Apache
// HTTP server

// 3 Read request and return response: server created in the second step will read HTTP request made by client which can be browser
// or console and return the response

// how to create node js web application

// 1 Import required module: The first step is to use require directive to load http module and 
// store returned HTTP instance into http variable .For example
// var http=require("http")

// create server: In the second step you have to use created http instance and call http.createServer()
// method  to create server instance and then bind it at port 8081 using listen method associated
// with server instance. pass it a function with request and response parameters and write the sample
// implementation to return Hello world 