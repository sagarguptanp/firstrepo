var arr = [1,2,3]; 
console.log(arr[0]);


// we can store hetrogeneous datatype in array as well

var arr1 = [1 , false , {name:"sagar",age : 24}, function(displayName){
    console.log(displayName);
},"String"];

console.log(arr1);
console.log(arr1[3]("sagar"));


