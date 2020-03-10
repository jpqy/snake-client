/**
 * Establishes connection with the game server
 */
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.3.52',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("Connected to server!");
    conn.write('Name: SNK');
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };