//whatever method we use to create a function internally a function class constructor will call 
// it passes the arguement name of function and body of function
function sum(number1,number2){
    return number1+number2;
}
// equivalent to the below code
// new Function(functionparameters...., functionbody)
var fun = new Function("number1","number2","return number1+number2");

console.log(fun(10,20));