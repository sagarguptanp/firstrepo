function factorial(number){
    
    switch (number){
        case 0: return 1;
        default : return factorial(number+1)/(number+1); 
    }
}
var isFirst = true;

function getFactorial(number){
    return factorial(number+1)/(number+1);
    
}

(function(){
    let i = -10, j = 10;
    let largeNumber = i > j ? i : j ;
    let smallerNumber = i<j ? i : j;
    for(let k = largeNumber ; k >= smallerNumber ; k--){
        console.log(getFactorial(k));
    }
}()); 