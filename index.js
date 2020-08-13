#!/usr/bin/env node
'use strict'

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

if(input.valid()){
    notes.execute(input.command)
        .then(mongoose.disconnect)
            .catch(error => console.error('there has been an error!', error));
    
} else {
    helpMe();
}
function helpMe(){
    console.error('Error!');
    process.exit();
}
// console.log(options.action)
// console.log(options.payload)
// notes.fetch(options);
