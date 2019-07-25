//function hoisitng 
//first constant move at top then variable and then complete functions.
// function will host with its function name.
hoistingExample();
function hoistingExample(){
    console.log("hositing");
}

// if function is defined with no name so it is not possible to access before its declaration
hoistingExample2();
var hoistingExample2 = function(){
    console.log("another hoiting example");
};