const net = require('net');


// Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  return conn;
};

const conn = connect();

conn.on('data', data => {
  console.log(data);
});

console.log('Connecting ...');
connect();