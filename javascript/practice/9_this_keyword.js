/*Before starting, let’s familiarize with a couple of terms:

1.Invocation of a function is executing the code that makes the body of a function, or simply calling the function. For example parseInt function invocation is parseInt('15').
2.Context of an invocation is the value of this within function body. For example the invocation of map.set('key', 'value') has the context map.
3.Scope of a function is the set of variables, objects, functions accessible within a function body.
*/

//function invocation

function hello(name){
    console.log("Hello " + name);
}

hello("sagar"); // function invocation

//this in function invocation

function global(){
    console.log(this);
    this.myNumber = 20;
}

global();
console.log(global.myNumber);

//in function invocation this is global object

