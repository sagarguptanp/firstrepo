//object prototypes
function totalQuantityIncrement(){
    var totalQuantity = 0;
    return function(quantity){
        totalQuantity = totalQuantity+quantity ;
        return totalQuantity;
    }
}


function totalInsanceIncrement(){
    var totalInstances = 0;
    return function(quantity){
        console.log(quantity);
        if(quantity!=0){
            totalInstances = totalInstances+1 ;
        }
            
        return totalInstances;
    }
}

var totalQuantityRef = totalQuantityIncrement();
var totalInstanceRef = totalInsanceIncrement();

function Fruit(name,color,quantity){
    this.name = name;
    this.color = color;
    this.quantity = quantity;
    totalQuantityRef(quantity);
}
function Apple(name,color,quantity){
    
    Fruit.call(this,name,color,quantity); // by using this we instantiate the parent class variables on the apple context
    getFruitDescription = function(){console.log("Friut name:- "+this.name+" Fruit color:- "+ this.color + " Fruit quantity:- "+ this.quantity);};
    totalInstanceRef();
}
Apple.prototype = Object.create(Fruit.prototype);
// by using the above line of code we can acheive prototyping inheritance

var apple = new Apple("apple1","red",1);
var apple1 = new Apple("apple2","green",3);

console.log("totalInstances :- "+ totalInstanceRef(0));
console.log("totalQuantity:- "+totalQuantityRef(0));