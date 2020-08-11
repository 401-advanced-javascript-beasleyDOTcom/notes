'use strict'
const minimist = require('minimist');

function Input(){
    //get the user input
    const args = minimist(process.argv.slice(2))
// use our prototypes to handle the user input
console.log('this is the args', args);
this.action = this.getAction(args.a);
this.payload = this.getPayload(args.p);
}

Input.prototype.getAction = function (action = ''){
    let validAction = /add|a|/i;
    return validAction.test(action) ? "add" : 'air-ROAR!';
    // return (action === 'a') | (action === 'add') ? 'wrong for matt' : action;
}
Input.prototype.getPayload = function (note = ''){
    // if(note ==='') {
    //     // return console.log('note-way thattll work!');
    //     console.log('this is the note', note)
    // }
    // else {
    //     return note;
    // }
    return (note === '') ? 'please add -p and then text in quotations': note;
}

module.exports = Input;