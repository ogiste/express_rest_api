// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
'use strict';

require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-classes',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-class-properties',
  ]
});
require('babel-polyfill');

// Import the rest of our application.
module.exports = require('./index.js');