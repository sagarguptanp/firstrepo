// let and const keyword.

// let is used for block level
var a,b;
a=3 , b=6;
if(a<b){
    var temp = 6;
}
console.log(temp);

if(a<b){
    let sagar = 8;
}
//console.log(sagar);

// const
const tmp = 30;
//tmp = 20;

const arr = [199,200,201,1];
arr.push(4) //in this case we are not changing the reference we are push new data on same reference.
arr =  [3];
console.log(tmp);