'use strict'
console.log("hahahahahah")
function Notes (obj){
    this.note = obj.payload;
    this.action = this.execute(obj);
// console.log('this is the object', obj);
// console.log('this is the note on 7', this.note);
}
Notes.prototype.execute = function (obj){
    // console.log('this is object dot action', obj.action)
if(obj.action === 'add'){
    this.add();
    return 'add';
}
}
Notes.prototype.add = function(){
    console.log('this is this note', this.note)
}
module.exports = Notes;