'use strict'
require('@code-fellows/supergoose');
const mongoose = require('mongoose');
const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(notes, 'add');

describe('note section', () => {
    it('execute() does nothing with invalid options', () => {
        return notes.execute({})
            .then(() =>{
                expect(notes.add).not.toHaveBeenCalled();
            });
    });
    it('notes() can add a note', () => {
        const action = 'add';
        const payload = 'please work for me!';
        return notes.execute({ action, payload})
            .then(results => {
                expect(notes.add).toHaveBeenCalled();
            });
    });
    it('notes() can return a saved note ', () => {
        const action = 'add';
        const payload = 'taste note';
        return notes.execute({action, payload})
            .then(savedNote =>{
                expect(savedNote.category).toBe('general');
                expect(savedNote.text).toBe('taste note');
            })
    });
});