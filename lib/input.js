'use strict'
const minimist = require('minimist');

class Input {
    constructor() {
        //get the user input
        const args = minimist(process.argv.slice(2));
        this.command = this.parse(args);
    }
    getAction(action = '') {
        let validAction = /add|a/i;
        return validAction.test(action) ? action : 'air-ROAR!';
    }
    getPayload(note = '') {

        return (note === '') ? 'please add -p and then text in quotations' : note;
    }

    parse(args) {
        const argsMap = {
            a: 'add',
            add: 'add',
            l: 'list',
            list: 'list',
            d: 'delete',
            delete: 'delete'
        };
        const theSwitch = Object.keys(args).find(key => argsMap[key]);
        const category = args.c || args.category;
        const action = argsMap[theSwitch];
        return {
            action,
            payload: typeof args[theSwitch] === 'string' ? args[theSwitch] : undefined,
            category,
        }

    }
    valid() {

        if (!this.command.action) {
            return false;
        }

        if (this.command.action === 'add') {
            if (!this.command.payload) { return false; }
        }
        if (this.command.action === 'delete') {

            if (!this.command.payload) return false;
            else return true;

        } else return true;
    }
}
module.exports = Input;