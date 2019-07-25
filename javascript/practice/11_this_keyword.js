// Method invocation
// in method invocation this is refer to the current object.

const obj = {
    numberA : 1,
    factorial : function(number){
        console.log(this); // here this refer to obj
        if(number==this.numberA){
            return 1;
        }
        return number*this.factorial(number-1);
    }
};

console.log(obj.factorial(4));

// but when method invocation from the function call so global context is set on this 

function Animal(name,color) {
    this.name = name;
    this.color = color;
    this.getColor = function(){
        console.log(this);
        console.log("name:- "+this.name+", color:- "+this.color);
    }
}
var animal = new Animal("cat","red");

function outerFunction(methodName){
    methodName();       // now this having reference of global object and result will be undefined
}
outerFunction(animal.getColor);



// to over come this problem 
//we have to bind this method

function outerFunction1(methodName){
    methodName();       // now this having reference of animal object so result will be name:- cat and color:- red
}
outerFunction1(animal.getColor.bind(animal));
