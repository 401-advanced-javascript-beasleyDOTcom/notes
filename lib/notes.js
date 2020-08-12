'use strict'
console.log("hahahahahah")
class Notes{ 
    constructor(obj){
        console.log(obj, 'this is the object from line 5 in notes')
    this.note = obj.command.payload;
    this.action = this.execute(obj);
// console.log('this is the object', obj);
// console.log('this is the note on 7', this.note);
}
    execute(obj){
    // console.log('this is object dot action', obj.action)
        if(obj.command.action === 'add'){
        this.add();
        return 'add';
        }
    }
    add(){
        console.log('You have added:', this.note)
    }
}
module.exports = Notes;