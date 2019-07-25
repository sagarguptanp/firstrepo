function sum(firstNumber){
    return function(secondNumber){
        return firstNumber + secondNumber;
    }
}

var result = sum(10);
console.log(result(20));



function buildFunctions(){
    var arr = [];

    for(var i=0;i<3;i++){
        arr.push(function(){
            console.log(i);
        });
    }
    return arr;

}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();