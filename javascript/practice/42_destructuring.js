//destructuring the array
const arr = [1,2,3,4,5];
const [first,second] = arr;

console.log(first);
console.log(second);

const [firstData , ...rest] = arr;

console.log(firstData);
console.log(rest);

//destructuring the object

const obj = {
    name : "sagar",
    age : 24,
    height : 180,
    weight : 56
}

const {age , height} = obj;
console.log(age,height);

// we can modify its value

const {name : nameTemp} = obj;
console.log(nameTemp);
console.log(obj);
const {ageTemp  = 26} = obj; 
console.log(ageTemp);
console.log(obj);

const toString = person => `${person.name}-${person.age}-${person.height}`;
console.log(toString(obj));

