// this in constructor call

function Animal(name,color){
    this.name = name;
    this.color = color;
}

var obj = new Animal("Cat","Black"); //when we call Animal function as a constructor so this refer to the obj context.
var obj1 = Animal("Dog","White"); //################# question to be ask
// in this case this refer to the window object.


//this is the first argument of .bind() when invoking a bound function

//use .bind function to bind this 

function outerFunction(name,age){
    this.name = name;
    this.age = age;
    this.details = function(){
        console.log("Person name:- "+this.name+" Person age:- "+this.age);
    };
}

var personDetails = new outerFunction("Sagar",24);
outerCall(personDetails.details.bind(personDetails));
outerCall(personDetails.details);// if we comment above line and uncomment the line 30 so we will get the output 
// person detail name : dog which is save in window object at line 9

function outerCall(callingFunction){
    callingFunction();
    //callingFunction.call(this); // if we bind an context using bind function so rebinding not able to possible
}