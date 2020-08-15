'use strict'

const NotesSchema = require('../model/notes-schema.js');
const NotesCollection = require('../model/notes-collection.js');
const nc = new NotesCollection();
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
        
        let returnedNote = await nc.create({text, category});
        console.log(`You have succesfully added this note: ${returnedNote}`);
        return returnedNote;
        
    }
    async list(category){
        const cuerve = category ? {category} : {};
        const notesFound = await nc.get(cuerve);
        notesFound.forEach(note =>{
            console.log('a string for good times thsi is inside notes found for eachness', note)
        })
        return ;
        }
    async delete(id){
        console.log('CONSOLE LOG IN DELETE', id)
        await nc.delete(id)
            .then(()=> {
                console.log('you have deleted a noote', id);
            })
    }
}
module.exports = Notes;

// when i want to call from the datbase I need to reference nc