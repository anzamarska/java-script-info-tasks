//1
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Peter";
delete user.name;

console.log(user);

// //2
const isEmpty = obj => Object.entries(obj).length === 0;

//3: yes

// 4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

const getSum = (total, person) => total + person;

const totalSalaries = Object.values(salaries).reduce(getSum, 0);

console.log(totalSalaries);

// //5

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = obj =>
  Object.keys(obj).map(function(x) {
    console.log(menu[x]);
    if (typeof menu[x] === "number") {
      menu[x] = menu[x] * 2;
    }
  });

multiplyNumeric(menu);
//console.log(menu);

//6
let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
    return this;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

console.log(
  "calculator",
  calculator.read(3, 6),
  calculator.sum(),
  calculator.mul()
);

//7
let ladder = {
  step: 0,
  up() {
    this.step++; // jak tylko to zwrócę "return this.step++", to wynik ladder.up() będzie liczba np. 0, więc nie będzie mozna zrobić chaina od ladder.up().down()
    return this; //bo w chainie chcę wywołać kropką cały obiekt
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    this.step;
    return this;
  }
};

const ladderFun = () => {
  ladder.up();
  return () => {
    ladder.down();
    return () => {
      return ladder.showStep();
    };
  };
};

console.log(
  "ladder",
  ladderFun,
  "lader 2",
  ladder
    // .up()
    // .up()
    // .down()
    // .up()
    // .down()
    .showStep()
);
