function checkAge(age){
    return age > 18 ? true : confirm('Do you have your parents permission to access this page?');
}

function checkAge2(age){
    return age > 18 || confirm('Do you have your parents permission to access this page?');
}


let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(obj){
    let counter = 0 ;
    for (key in obj){
        counter++;
    }
    return counter === 0 ? true : false;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let salarySum = 0;
for ( key in salaries ) {
    salarySum = salarySum + salaries[key];
}  
console.log(salarySum);

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  console.log(menu);
  multiplyNumeric(menu);
  
  // after the call
  console.log(menu);

function multiplyNumeric(obj){
    for(key in obj){
        obj[key] = typeof obj[key] == "number" ? parseInt(obj[key]) * 2 : obj[key];
    }
}  

