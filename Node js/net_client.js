// Client

const net=require('net');

const client=net.connect({port:55018},()=>{//use same port o server

    console.log('connected to server');
    client.write('world!\r\n');
});

client.on('data',(data)=>{
    console.log(data.toString());
    client.end();
});

client.on('end',()=>{
    console.log('disconnected from server');
});