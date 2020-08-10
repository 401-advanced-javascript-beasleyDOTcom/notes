'use strict'
const minimist = require('minimist');

function Input(){
    //get the use input
    const args = minimist(process.argv.slice(2))
// use our prototypes to handle the user input
this.action = this.getAction(args.a);
this.payload = this.getPayload(args.n);
}

Input.prototype.getAction = function (action = ''){
    let validAction = /--add|-a|/i;
    return validAction.test(action) ? action : 'air-ROAR!'
}
Input.prototype.getPayload = function (note = ''){
    return 'note-way thattll work!';
}

module.exports = Input;