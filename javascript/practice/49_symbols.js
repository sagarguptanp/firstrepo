//“Symbol” value represents a unique identifier.


let id = Symbol("id"); 
console.log(id);
let id1 = Symbol("id");
console.log(id1);

console.log(id==id1);

// object key
let obj1 = { name : "sagar" , age : 23 , [id] : "Symbol as key literal"};

for(let key in obj1){
    console.log(obj1[key]);//symbol keys are not visible (it provide the hide key functionality)
}

// if we want to create same symbol so we can use Symbol.for(description)

let id2 = Symbol.for("id");
let id3 = Symbol.for("id");
console.log(id2 == id1);
console.log(id2 == id);
console.log(id3 == id2);

// if we want key from symbol

console.log(Symbol.keyFor(id2));

