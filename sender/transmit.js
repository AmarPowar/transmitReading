'use strict'

const io = require('socket.io-client');
/*
*  This function will be called for each event.  (eg: for each sensor reading)
*  Modify it as needed.
*/

/**
 *  Assumptions :
 *  
 * here code is working and we are calling the api for each senor reading. we can to find the way to reduce the api call 
 * and send maximum data in optimum time.
 * 
 * solution :- 
 * 
 * as we are calling api multiple time ther is better way to call socket it will 50 % faster that  http api .
 * http call also have some restriction over concurrent connection from browser and sending data .
 * once the socket connection establish we can easly send the data back and forth.  
 * 
 * 
*/
const socket = io.connect('http://localhost:8080', { reconnect: true });
socket.on('connect', function (socket) {
  console.log('Connected!');
});

const transmit = function (eventMsg, encoding, callback) { 
  socket.emit('event', eventMsg);
  callback();
}

module.exports = {
  socket,
  transmit
}
