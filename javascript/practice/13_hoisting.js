/*
Variable Hoisting 


1.Declaration - create a new variable. E.g. var myValue
2.Initialization - initialize the variable with a value. E.g. myValue = 150
3.Usage - access and use the variable value. E.g. alert(myValue)
*/

// variable in global scope

console.log(name);
var name = "sagar";

// name variable is hoisted and move at the top of the program and undefined value is assigned on same.
// in case of variable hoisting variable intialisation is move to top of the program but variable insitialisation
// position will remain same.

console.log(name);

// variable in function scope

function outerFunction(){
    console.log(funcVal);
    var funcVal = "outer Function";
    console.log(funcVal);
}

outerFunction();

// variable in block scope

if(true){
    console.log(blockVar);
    var blockVar = "block level hoister";
}
console.log("Block level hoisting is possible or not"+blockVar);

// hoisting with constant
// if we use constant without initialization it will get error.
//console.log(constVar);// it will gives error
//const constVar = "const variable value";



