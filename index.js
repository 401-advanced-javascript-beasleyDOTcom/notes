#!/usr/bin/env node
'use strict'

const Input = require('./lib/input.js');
const notes = require('.lib/notes.js');
const options = new Input();
notes.fetch(options);
