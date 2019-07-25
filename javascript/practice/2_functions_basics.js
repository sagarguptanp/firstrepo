console.log(functionName.name);//function is hoisted 
//a variable will be create with the same name as function name and hoisted to the current scope.
// that's why it's accessible before defining a function
function functionName(functionParameters){
    console.log(functionParameters);
}

//function call
functionName(10);
functionName(20);


// function declaration and function expression
// when statement starts from function keyword i.e function declaration otherwise function expression eg.annonomous function


