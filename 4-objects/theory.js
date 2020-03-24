let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log("user name", this.name);
    return this.name; // leads to an error
  }
};
console.log("user object", user.sayHi()); // Whoops! inside sayHi(), the old name is used! error!

let admin = user;
user = null; // overwrite to make things obvious
console.log("user null", user); // Whoops! inside sayHi(), the old name is used! error!

console.log("admin object", admin.sayHi()); // Whoops! inside sayHi(), the old name is used! error!

let user1 = {
  firstName: "Ilya",

  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

const hi = user1.sayHi.bind(user1); //arrow function no matter
hi(); // "this" jest not bound nie jest domyślnie związany z metodą (wywołaniem przez kropkę)
user1.sayHi(); // Ilya

let user2 = {
  firstName: "Ilya",
  sayHi() {
    // alert(this.firstName)
    function x() {
      console.log(this.firstName);
    }
    return x();
  }
};

user2.sayHi(); // Ilya

// constructor

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.read = function() {
    console.log("a", this.a, "b", this.b);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator(2, 3);
calculator.read();
console.log("sum", calculator.sum(), "mul", calculator.mul());

function Accumulator(userNumber) {
  this.userNumber = userNumber;

  this.sum = function() {
    this.userNumber++;
    return this;
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.sum(); // adds the user-entered value
accumulator.sum(); // adds the user-entered value

console.log(accumulator.sum());
