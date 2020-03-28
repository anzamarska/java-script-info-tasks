//2

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

function checkAge(age) {
  return (age>18) ? true :  confirm('Did parents allow you?') 
};

function checkAge(age) {
    return (age>18) ||  confirm('Did parents allow you?');
};


//3
function min(a,b){
    return (a-b > b-a) ? b : a;
}

//
let x = prompt("Choose x",);
let n = prompt("Choose n",);

function pow(x, n){
    let result = x;

    for (let i = 1; i < n ; i++ ) {
        result *= x;
    }
    return result;
}

