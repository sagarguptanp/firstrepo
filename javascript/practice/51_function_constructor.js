function Accumulator(startingValue){
    this.startingValue = startingValue;
    this.value = startingValue;
    this.read = () => {value +=  +prompt("Enter number");}
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values