const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });
  conn.setEncoding('utf8');
  
  return conn;
};

const conn = connect();

conn.on('data', data => {
  console.log(data);
});

module.exports = connect;
