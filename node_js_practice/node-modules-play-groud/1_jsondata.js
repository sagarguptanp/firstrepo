const fs = require('fs');


// const book = {
//     author : "sagar",
//     titile : "Json Data"
// };

// const bookJson = JSON.stringify(book);
// console.log(typeof bookJson);
// console.log(bookJson);


// fs.writeFileSync("./writeJsonData.txt",bookJson);


// const parseData = JSON.parse(fs.readFileSync("writeJsonData.txt"));
// console.log(typeof parseData);
// console.log(parseData);

const data = fs.readFileSync("writeJsonData.txt");
const userObj = JSON.parse(data);
userObj.name =  "sagar";
userObj.age = 24;
const jsonData = JSON.stringify(userObj);
console.log(jsonData);
debugger;
fs.writeFileSync("./writeJsonData.txt",jsonData);
