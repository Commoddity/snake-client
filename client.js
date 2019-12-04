const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: PVL");
    // setInterval( func = () => {
    //   conn.write("Move: up");
    // }, 500);
  });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
