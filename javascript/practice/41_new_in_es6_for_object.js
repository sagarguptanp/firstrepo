
const firstName = "bob", lastName = "Doe";

const obj = {
    firstName : firstName,
    lastName : lastName
}

console.log(obj);

// enhancement

const obj2 = {
    firstName,
    lastName
}

console.log(obj2);

const obj3 = {
    firstName : "sagar",
    [firstName] : "dasd"
}
console.log(obj3);