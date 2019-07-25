console.log("another file");

let name = "sagar";

module.exports.name = name;  // when export single thing it will return the same when require the file but in case of
// multiple things so it return object.

let sum = ( firstNo , secondNo ) => {return firstNo + secondNo};
module.exports.sum = sum;

let notes = "My notes";

let returnNotes = () => {return notes;};

module.exports.returnNotes = returnNotes;
