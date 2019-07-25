// generator function
// this function is used for execute where it ends from last

function* requestIdGenerator(){
    var a = 1;
    while(true){
        yield a++;
    }
}

const id = requestIdGenerator();
console.log(id.next().value);
console.log(id.next().value);

const id2 = requestIdGenerator();
console.log(id2.next().value);
console.log(id2.next().value);

//console.log(fibonacci().send(10));