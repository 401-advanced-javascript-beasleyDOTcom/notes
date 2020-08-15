'use strict'

const NotesSchema = require('./notes-schema.js');
const mongoose = require('mongoose');
const notesy = mongoose.schema;

class NotesCollection{
    create(kilmer){
        let note = new NotesSchema(kilmer);
        
        return note.save();
    };
    get(category){
        return category ? NotesSchema.find(category): NotesSchema.find({});
    };
   
    delete(id){
       return NotesSchema.findByIdAndDelete(id);
    };
}


module.exports = NotesCollection;

// I refence NotesSchema