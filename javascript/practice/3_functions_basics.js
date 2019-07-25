//function scope

//function defination is only inside the block in which it is defined for eg.

function outerFunction(){
    function innerFunction(){
        console.log("inner function");
    }
    innerFunction();
}

outerFunction();
//innerFunction(); // it gives error Reference Error.