// default value
function sum (a, b=10){
    return a+b;
}

console.log(sum());//Nan
console.log(sum(20,20));//40
console.log(sum(19));//29

