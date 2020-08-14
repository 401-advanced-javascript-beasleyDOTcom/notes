'use strict'

const NotesSchema = require('./notes-schema.js');
const NotesCollection = require('../model/notes-collection.js');
class Notes{
    constructor(){
        this.collection = new NotesCollection;
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
        // we need to create a note using a category and a text
        // const newNote =  new NotesSchema({
        //     category: category,
        //     text: text
        // });
        const nc = new NotesCollection();

        return await this.collection.create({text, category});
        // let savedNote = await newNote.save();
        // console.log('line 36 ===============================')
        // console.log('this is what the saved note is', savedNote)
        
    }
    async list(category){
        const cuerve = category ? {category} : {};
        const notesFound = await NotesSchema.find(cuerve);
        notesFound.forEach(note =>{
            console.log('a string for good times thsi is inside notes found for eachness', note)
        })
        }
    async delete(id){
        console.log('CONSOLE LOG IN DELETE', id)
        await NotesSchema.findByIdAndDelete(id)
            .then(()=> {
                console.log('you have deleted a noote', id);
            })
    }
}
module.exports = Notes;