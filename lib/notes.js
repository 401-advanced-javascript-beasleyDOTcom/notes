'use strict'
// class Notes{ 
//     constructor(obj){
//         console.log(obj, 'this is the object from line 5 in notes')
//     this.note = obj.command.payload;
//     this.action = this.execute(obj);
// // console.log('this is the object', obj);
// // console.log('this is the note on 7', this.note);
// }
//     execute(obj){
//     // console.log('this is object dot action', obj.action)
//         if(obj.command.action === 'add'){
//         this.add();
//         return 'add';
//         }
//     }
//     add(){
//         console.log('You have added:', this.note)
//     }
// }
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
        // we need to create a note using a category and a text
        // const newNote = new NotesModel({category: text});
        // let savedNote = await newNote.save();
        // return savedNote;
    }
    async list(category){

    }
    async delete(id){

    }
}
module.exports = Notes;