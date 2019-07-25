// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     constructor(name){
//         this.name = name;
//     }
// }

// class Cat extends Animal{
//     constructor(name,age,color){
//         super(name,age);
//         this.color = color;
//     }
// }

// class Dog extends Animal{
//     constructor(name,age,color){
//         super(name,age);
//         this.color = color;
//     }
// }

// Object.setPrototypeOf(Dog.prototype,Animal);
// console.log(Dog.prototype);
// console.log(Cat.prototype);
// console.log(Animal.prototype);
// console.log(Cat.__proto__);
// var a = new Cat("oggy",10 , "green");
// console.log(a.__proto__);


class Animal { 
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
  let obj = new Animal();
  console.log(obj.speak()); // Animal {}
  let speak = obj.speak;
  console.log(speak()); // undefined
  
  console.log(Animal.eat()); // class Animal
  let eat = Animal.eat;
  console.log(eat()); // undefined