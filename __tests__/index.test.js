'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        a: 'This is a note',
    };
});

const Input = require('../lib/input.js');

describe('Parse ON!', () => {

    it('parse() creates a good object', () => {
        let options = new Input();
        let command = options.parse({ a: 'test' });
        console.log('this is command in test', command)
        expect(command.action).toBe('add');
        expect(command.payload).toBe('test');
    });
    it('should parse --add and payload', () => {
        const input = new Input();
        const command = input.parse({add: 'what a good payload!'});
        expect(command.action).toBe('add');
        expect(command.payload).toBe('what a good payload!');
    });

    it('should have undefined action and payload for unknown sWitches', () => {
        const input = new Input();
        const command = input.parse({ unknown: 'some paylord'});
        expect(command.action).not.toBeDefined();
        expect(command.payload).not.toBeDefined();      
    });

describe('VALIDATE!', () =>{
    it('valid() is totally cool with a proper object', () => {
        let options = new Input();
        expect(options.valid()).toBe(true);
    });
    it('valid() should be completely uncool with an invalid object', () => {
        let options = new Input();
        options.command = {};
        expect(options.valid()).toBe(false);
    });
})
    it('valid() respects a proper object', () => {
        let options = new Input();
        expect(options.valid()).toBeTruthy();
    });

    it('valid() rejects an invalid object', () => {
        let options = new Input();
        options.command = {}; // break it
        expect(options.valid()).toBeFalsy();
    });
    //stil workign on below test
    describe('parse category', () => {
        it('parse -a with payload and --category', () => {
            let options = new Input();
            let command = options.parse({ a: 'test' });
            console.log('this is command in test', command)
            expect(command.action).toBe('add');
            expect(command.payload).toBe('test');
        });

    })
    describe('category', () =>{
        it('should parse category with full switch,', () => {
            let options = new Input();
            const actual = options.parse({ add: 'evict frog tennant', category: 'things to do'});
            expect(actual.category).toBe('things to do');
        });
        it('should parse category with short switch', () => {
            let options = new Input();
            const actual = options.parse({add: 'think of blue skies and big storms', c: 'things to do'});
            expect(actual.category).toBe('things to do');
        });
        it('should parse undefined category with missing switch', () => {
            let options = new Input();
            const actual = options.parse({add: 'get up! get on the scene!'});
            expect(actual.category).not.toBeDefined();
        });
    })
});