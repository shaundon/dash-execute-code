# Dash Execute Code

Execute arbitrary code when you press your Dash button.

## Installation

1. Make a copy of `config.example.js` named `config.js`.
1. `npm install`.
1. Go through the setup process on your Dash button, but quit the Amazon app on your phone when you get to the 'Choose Product' screen.
1. `npm run find-buttons`. This uses [node-dash-button](https://www.npmjs.com/package/node-dash-button) to search for buttons.
1. Put the MAC address of your button into `config.js`.

## Usage

`node index "command to run"`. For example `node index "ls -la"`.

The command you specify will be run when you press the Dash button.
