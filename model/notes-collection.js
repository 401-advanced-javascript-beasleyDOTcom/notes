'use strict'

const NotesSchema = require('../lib/notes-schema.js');
const mongoose = require('mongoose');
const { create } = require('../lib/notes-schema.js');
const notesy = mongoose.schema;

class NotesCollection{
    create(kilmer){
        let note = new NotesSchema(kilmer);
        
        return note.save();
    };
    get(){

    };
   
    delete(){};
}


module.exports = NotesCollection;