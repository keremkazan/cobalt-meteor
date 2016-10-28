#!/usr/bin/env node

const path = require('path');
const { run, config } = require('cobalt-base');
const { init } = require('./lib/init.js');

config.SAVE_ROOT = 'app';
config.TEMPLATES_DIR = path.join(__dirname, 'templates');
config.GENERATORS_DIR = path.join(__dirname, 'generators');

config.OPTION_DEFINITIONS.push(
  { name: 'stateless', type: Boolean },
  { name: 'css', type: String, defaultValue: 'less'}
);

config.COMMANDS.init = init(config);

run();
