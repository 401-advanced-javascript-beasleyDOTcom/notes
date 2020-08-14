'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../model/notes-collection.js')
describe('notes collection test suite', () => {
    it('should create the best day ever!', async () => {
        const notes = new NotesCollection();
        const testNote = {text: 'celebrate good times COME ON', category: 'because you get to learn!' };
        const note = await notes.create(testNote);
        console.log('=======================================================')
        expect(note._id).toBeDefined();
        // expect(note.text).toBe(testNote.text);
        // expect(note.category).toBe(testNote.category);
        compareProps(testNote, note);
    });

})

function compareProps(a,b){
    for(const key in a){
        expect(a[key]).toBe(b[key]);
    }
}