//global environment

var a = "Hello world";

function b(){
}

console.log(global.a);
console.log(global.b);

//hoisting 

func();
console.log(variable);
var variable = 10;
function func(){
    console.log("Func function");
}

// in execution phase of execution context all variables and function allot a memory
// so the variable is set to undefined and when we use before initialise it gives undefined.


// execution context every function has its own execution context.

function b(){
    var myVar;
    console.log(myVar);
}

function ad(){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 10;
console.log(myVar);
ad();
console.log(myVar);

