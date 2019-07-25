// call by ref all objects including functions

var c = {name:"sagar",age : 24};
var d ;

d = c;

c.name = "saggu"; //mutate my object
console.log(c);
console.log(d);

// by reference even for function arguments

function changeName(obj){
    obj.name="sagar1";
}

changeName(c);
console.log(c);
console.log(d);