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

    // Give three-letter name to be displayed on server
    conn.write('Name: SNK');

    // Sending "Move: up" moves the snake up
    let up = () => {
      conn.write('Move: up');
    };
    // Can keep moving snake up by using setInterval
    // setInterval(up, 500)
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };