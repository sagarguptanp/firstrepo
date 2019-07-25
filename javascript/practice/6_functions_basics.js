//Arrow function

// by using arrow function we missed the arguments object present in method .
//this is binded to to outer context.

var fun = (number) => {console.log(arguments);// undefined  this.number search for the number in outer context but not avaiable
    // so it gives undefined.  
    return number*number};
// or 
var fun1 = number1 => {return number1*number1};
//or
var fun3 = number1 => console.log(number1*number1);
//or
var fun4 = number1 => number1*number1;


console.log(fun(5));
console.log(fun1(3));
console.log(fun3(2));
console.log(fun4(7));

//arguments property is missing
var num = (number) => {console.log(arguments);};
num(1,2,3,4,5);
//arguments property is available
function a(a,b,c){console.log(arguments);}
a(1,2,3,4,45);


var calculator = {
    number1 : 1,
    number2 : 1,
    sum(number1,number2){
        // this context means the outer context.
        return this.number1+this.number2;
    }
}

console.log(calculator.sum(10,20));
