//2 

// 1, 2, 3, 4
// 1, 2, 3, 4, 5

//3

// 0, 1, 2, 3, 4
// the same

//3

for (let i=2; i <= 10; i++){
    if ( i % 2 == 0) {
        alert(i);
    }
}

//4

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }


let i=0
while (i<3){
    alert (`number ${i}!`);
    i++;
}

//5

let number=0

do {
    number = prompt("Choose number",)
} while (number <100 && !(number === ""));

//6

let maxNum = prompt("Choose max number,");

nextPrime:
for (let i=2; i <= maxNum; i++){
    for (let j=2; j<i; j++){
        if (i%j==0) continue nextPrime; //not prime
    }
    alert (i);
} 

