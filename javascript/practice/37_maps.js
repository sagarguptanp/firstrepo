// Map

var map = new Map();
map.set("key1",1);
map.set("key2","string");
map.set("key3",{name:"sagar",age:20});
map.set("key4",[1,2,3]);

for(let data of map.keys()){
    console.log(map.get(data));
}

for(let data of map){
    console.log(data);
}

for(let [key,value] of map){
    console.log(key +" " + value);
}
console.log(map.has("key1"));
console.log(map.has("key2"));


// // weakmap

// var weakmap = new WeakMap();
// weakmap.set("key",1);
// weakmap.set("key2","string");
// weakmap.set("key3",{name:"sagar",age:20});
// weakmap.set("key4",[1,2,3]);

// for(let data of mweakmapap.keys()){
//     console.log(weakmap.get(data));
// }

// for(let data of weakmap){
//     console.log(data);
// }

// for(let [key,value] of mweakmapap){
//     console.log(key +" " + value);
// }
// console.log(weakmap.has("key1"));
// console.log(weakmap.has("key2"));




//Set

var set = new Set();
set.add(1);
set.add(2);
set .add(3);
set.add(4);
for(let data of set){
    console.log(data);
}
console.log(set.has(3));




// static methods
class Fruits{
    cnstructur(name,age){
        this.name=name;
        this.age = age;
    }

    static detail(){
        console.log("static method invokation");
    }

    get Name(){
        return this.name;
    }

    get Age(){
        return this.age;
    }
    set Name(name){
        this.name = name;
    }
    set Age(name){
        this.age = age;
    }
}

console.log(Fruits.detail());
var classobj = new Fruits("apple","10");
console.log(classobj.__proto__);