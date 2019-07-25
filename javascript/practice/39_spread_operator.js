// spread operator

// in function
function sum(...args){
    let sum = 0;
    for(let data of args){
        sum = sum + data;
    }
    console.log(sum);
}

// using const

const arrays = [5,3];
const newArray = [...arrays , 9 , ...arrays];
console.log(newArray);

// in objects
const Person = {
    name: "sagar",
    age : 24
};

const mike = {
    ...Person,
    age : 25

};

console.log(mike);

