

function ad(){
    function b(){
        console.log(myVar);
    }
    var myVar = 2;
    b();
}

var myVar = 10;
ad();


console.log(aa); // we will get undefined
var aa = 10;
console.log(ab); // but in this case we will get error 
// because let variable is not used before declaration and insitialization.
let ab = 20;