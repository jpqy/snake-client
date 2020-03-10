// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection=conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // Ctrl+C
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up')
    //setInterval(connection.write('Move: up'), 500);
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'z'){
    connection.write('Say: fuud belong 2 us')
  } else if (key === 'x'){
    connection.write('Say: fud get stronk')
  } else if (key==='c'){
    connection.write('Say: no crash');
    //setTimeout(connection.write('Say: so scare'), 500);
  }
};
module.exports = { setupInput };