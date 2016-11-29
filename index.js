const config = require('./config');
const dash_button = require('node-dash-button');
const dash = dash_button(config.dash.MAC_address);
const exec = require('child_process').exec;

const commandToRun = process.argv[2];

if (!commandToRun) {
  console.error('Supply a command line argument to run when the Dash button is pressed.');
  process.exit(1);
}

console.log(`Service running. Will execute "${commandToRun}" when the Dash button is pressed.`);

dash.on('detected', () => {
  console.log('Dash button was pressed.\n\n');

  const runningCommand = exec(commandToRun);
  runningCommand.stdout.on('data', (data) => console.log(data.toString()));
  runningCommand.stderr.on('data', (data) => console.log(data.toString()));
  runningCommand.on('exit', (code) => console.log(`Child process exited with code ${code}`));
});
