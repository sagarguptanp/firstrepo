// obj is unordered collection of primitive and ref datatype

// ways to create obj

var obj = {name:"sagar",age:24};
console.log(obj);

var obj1 = new Object();
obj1.name = "sagar";
obj1.age = 24 ; 
console.log(obj1);

function Person(name,age){
    this.name = name;
    this.age = age;
}
var obj2 = new Person("sagar",24);
console.log(obj2);

// prototype object creation
var obj3 = {name:"sagar",age:24};
var obj4 = Object.create(obj3);

console.log(obj4);
