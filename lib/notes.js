'use strict'
console.log("hahahahahah")
function Notes (obj){
this.action = obj.action;
this.note = obj.payload;
}
Notes.prototype.execute = function (obj){
this.action = obj.action;
}
Notes.prototype.add = function(obj){
    console.log(this.note)
}
module.exports = Notes;