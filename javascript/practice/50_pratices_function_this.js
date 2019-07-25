var user = {name : "sagar" , age : 24 , sayHi(){
    console.log(user.name);
}}

var user1 = {};
Object.assign(user1,user);
user1.name = "saggu";
user1.sayHi(); // it produce wrong output print sagar instead of saggu

var obj = {name : "sagar" , age : 24 , sayHi(){
    console.log(this.name);
}};

(obj.sayHi)();
let ref = obj.sayHi;
ref();



function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user2 = makeUser();
  console.log(user2);
  console.log( user2.ref.name );


  

  var calculator = { firstNo  ,
    secondNo  ,
    sum(){
        alert(this.firstNo + this.secondNo);
    },
    multiply(){
        alert(this.firstNo * this.secondNo);
    },
    read(){
        this.firstNo = +prompt("Enter first no",0);
        this.secondNo = +prompt("Enter Second No" , 0 );
    }
};


let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };

  ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

//Modify the code of up, down and showStep to make the calls chainable, like this:


let ladder1 = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

  console.log(ladder1.up().up().down().showStep()); // 1
