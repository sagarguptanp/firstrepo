
//problem with function invocation
var obj = {
    numberA : 5,
    numberB : 6,
    sum : function(){
        console.log(this);
        function calculator(){
            console.log(this); // here this is global context
            console.log(this.numberA+this.numberB);
            return this.numberA+this.numberB;
        }
        return calculator();
    }
}
//obj.sum();


// to overcome this problem we can use call(),apply(),bind() 

var obj1 = {
    numberA : 5,
    numberB : 6,
    sum : function(){
        console.log(this);
        var calculator = function (a, b){
            console.log(a, b);
            console.log(this); // here this is on current context passed by call method
            console.log(this.numberA+this.numberB);
            return this.numberA+this.numberB;
        };
        return calculator.call(this);
    }
}
obj1.sum();


// another solution use arrow function
var obj2 = {
    numberA : 5,
    numberB : 6,
    sum : function(){
        console.log(this);
        var calc = () => {
            console.log(this); // here this is on current context passed by call method
            console.log(this.numberA+this.numberB);
            return this.numberA+this.numberB;
        }
        return calc();
    }
}
//obj2.sum();
