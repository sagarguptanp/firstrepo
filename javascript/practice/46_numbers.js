// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let a = "1";
let b = "2";
console.log(a+b);
console.log("1"+"2");
console.log(+a + +b);

let z = (1+2,3+4);
console.log(1+2 , 3+4);
console.log(z);

console.log("Be"=="Be");
console.log("BE"<"Be");

console.log(null == undefined);

console.log( undefined > 0 ); 
console.log( undefined < 0 ); 
console.log( undefined == 0 );

console.log( null > 0 );  
console.log( null == 0 ); 
console.log( null >= 0 ); 

console.log(5 > 4); // true
console.log("apple" > "pineapple");  //false
console.log("2" > "12"); // true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); // false