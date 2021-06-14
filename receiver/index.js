'use strict'

/*
*  Modify this file as needed.
*/

const http = require('http')

const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => {
    console.log('receiving data=',data);
    /**
     * here we can store all received data into database or file for further use.
     */
   });
  client.on('close', (data) => { 
    console.log(data);
   });
});
const port =8080;
server.listen(port,()=>{
  console.log("webscoket is running on port : ",port)
})
