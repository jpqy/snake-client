// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

let currentInterval;
const handleUserInput = (key) => {

  // Interval to move the snake
  const interval = 100;

  // Clear the previous movement interval if a movement key is pressed
  if (currentInterval && (key === 'w' || key === 'a' || key === 's' || key === 'd')) {
    clearInterval(currentInterval);
  }

  // Ctrl+C
  if (key === '\u0003') {
    process.exit();

    // Movement
  } else if (key === 'w') {
    currentInterval = setInterval(() => connection.write('Move: up'), interval);
  } else if (key === 'a') {
    currentInterval = setInterval(() => connection.write('Move: left'), interval);
  } else if (key === 's') {
    currentInterval = setInterval(() => connection.write('Move: down'), interval);
  } else if (key === 'd') {
    currentInterval = setInterval(() => connection.write('Move: right'), interval);

    // Banter
  } else if (key === 'z') {
    connection.write('Say: fuud belong 2 us');
  } else if (key === 'x') {
    connection.write('Say: fud get stronk');
  } else if (key === 'c') {
    connection.write('Say: plz no crash...');
    setTimeout(() => {
      connection.write('Say: ...so scare');
    }, 2000);
  }
};
module.exports = { setupInput };