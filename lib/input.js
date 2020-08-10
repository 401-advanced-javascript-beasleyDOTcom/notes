'use strict'
const minimist = require('minimist');

function Input(){
    //get the use input
    const args = minimist(proces.argv.slice(2))
// use our prototypes to handle the user input
this.method = this.getAction(args.a);
this.note = this.getNote(args.n);
}

Input.prototype.getAction = function (action = ''){
    let validAction = /--add|-a|/i;
    return validAction.test(action) ? action : 'air-ROAR!'
}
Input.prototype.getNote = function (note = ''){
    return isNote(note) ? note : 'note-way thattll work!';
}

module.exports = Input;