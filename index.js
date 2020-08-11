#!/usr/bin/env node
'use strict'

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const options = new Input();
const payload = new Notes(options);
console.log(options)
console.log('this is the payload', payload)
// console.log(options.action)
// console.log(options.payload)
// notes.fetch(options);
