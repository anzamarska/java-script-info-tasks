const user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Peter"
delete user.name;

console.log(user);


//2

const isEmpty = obj => Object.entries(obj).length === 0;

//3: yes

// 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

const getSum = (total, person) => total + person;

const totalSalaries = Object.values(salaries).reduce(getSum, 0);

console.log(totalSalaries);


//5

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };


  const multiplyNumeric = (obj) => Object.keys(obj).map(function(x){
    console.log(menu[x]);  
    if (typeof menu[x] === "number"){
          menu[x]=menu[x]*2;
  }});

multiplyNumeric(menu);
console.log(menu);



