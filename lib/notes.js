'use strict'
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy', {
    useNewUrlParser: true,
    useUnifiedTopology : true
});
const notesSchema = require('./notes-schema.js');
class Notes{
    constructor(){

    }

    async execute(command){
        switch (command.action){
            case 'add':
                return this.add(command.payload, command.category);
                break;
            case 'list':
                return this.list(command.category);
                break;
            case 'delete':
                return this.delete(command.payload);
                break;
            default:
                return Promise.resolve();
        }
    }
    async add(text, category){
        console.log('what is going on online 32')
        // we need to create a note using a category and a text
        const newNote = new notesSchema({category: text});
        let savedNote = await newNote.save();
        console.log('line 36 ===============================')
        return savedNote;
    }
    async list(category){

    }
    async delete(id){

    }
}
module.exports = Notes;