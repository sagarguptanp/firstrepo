
// function statement

function display(name){
    console.log(name);
}

// function expression
var dis = function(name){
    console.log(name);
};
dis("sagar");

//iife (imidiately invoked function expression)
(function(data){
    console.log("Hello your name is :- "+ data);
}("sagar"));

