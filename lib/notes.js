'use strict'
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy', {
    useNewUrlParser: true,
    useUnifiedTopology : true
});
const NotesSchema = require('./notes-schema.js');
class Notes{
    constructor(){

    }

    async execute(command){
        switch (command.action){
            case 'add':
                return this.add(command.payload, command.category);
                break;
            case 'list':
                return this.list(command.payload);
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
        const newNote =  new NotesSchema({
            category: category,
            text: text
        });
        let savedNote = await newNote.save();
        // console.log('line 36 ===============================')
        console.log('this is what the saved note is', savedNote)
        return savedNote;
    }
    async list(category){
        const cuerve = category ? {category} : {};
        console.log('as string this is curevve', cuerve)
        const notesFound = await NotesSchema.find(cuerve);
        console.log('notes found on line 44', notesFound);
        notesFound.forEach(note =>{
            console.log('a string for good times thsi is inside notes found for eachness', note)
            console.log('these are the best notes ever!', note.text)
        })
        // return ;
        }
    async delete(id){
        console.log('CONSOLE LOG IN DELETE', id)
        await NotesSchema.findByIdAndDelete(id)
            .then(()=> {
                console.log('you have deleted a noote', id);
            })
        // await NotesSchema.delete(id);
        // console.log('deleted ', id, 'from notesy')
    }
}
module.exports = Notes;