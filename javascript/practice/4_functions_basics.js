//function expression

var assignedFunctionToVariable = function(a,b){return a*b};

console.log(assignedFunctionToVariable(2,3));

//add function in object

var object = {
    name : "sagar",
    age : 24,
    exp : {java:2,node:0.5},
    totalExp : function(){
        var totalExperience=0;
        for(var data in this.exp){
            console.log(data);
            totalExperience = totalExperience + this.exp[data];
        }
        return totalExperience;
    }
}

console.log(object.totalExp());

//Assigned to a variable as an object assignedFunctionToVariable= function(...) {...}
//Create a method on an object totalExp: function() {...}
//Use the function as a callback .reduce(function(...) {...})

//all function is identified by its function name but annonimous function doesn't have the same so we can't call it by name.
// but we can call name function by its name.

function funName(){
    console.log("function funName");
}

var funNameVar = function funName2(){
    console.log("function funName2");
    console.log(typeof funName2 === "function"); // we can call funName2 as an function inside current block but
    //outside its accessible with name funNameVar.
}

console.log(funNameVar()); //it will return funName2
console.log(typeof funName2 === "function"); // false but when we call same inside the function it return true
console.log(typeof funNameVar === "function"); // true

funName();
