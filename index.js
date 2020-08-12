#!/usr/bin/env node
'use strict'

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const input = new Input();
const notes = new Notes(input);
console.log('this is your input', input)
console.log('this is the note', notes)
// console.log(options.action)
// console.log(options.payload)
// notes.fetch(options);
