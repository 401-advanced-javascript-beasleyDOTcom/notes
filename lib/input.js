'use strict'
const minimist = require('minimist');

class Input{
    constructor (){
    //get the user input
    const args = minimist(process.argv.slice(2));
    console.log('this is args on line 7 ',args)
    this.command= this.parse(args);
    }
        getAction(action = ''){
        let validAction = /add|a/i;
        return validAction.test(action) ? action : 'air-ROAR!';
}
        getPayload(note = ''){
  
        return (note === '') ? 'please add -p and then text in quotations': note;
        }

        parse(obj){
            const command = {'action':'add', 'payload': obj.a};
            console.log(obj, 'this is object on line 21')
            let actionKey = Object.keys(obj);
            if(actionKey[1]==='a' || actionKey[1] === 'add'){
                command.action = 'add';
            }
        return command;
        }
        valid(){
            console.log(this.command.action, 'this is line 28', this.command.payload)
            return !!(this.command.action && this.command.payload);
        }
    }
module.exports = Input;