//1 
// yes.

//2

function Calculator(){

    this.read = function() {
    this.a = Number(prompt("value1"));
    this.b = Number(prompt("value2"));
    }

    this.sum = function(){
        return this.a + this.b;
    }

    this.mul = function(){
        return this.a * this.b;
    }
} 

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//3

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        newValue = +prompt("Enter value that you want to add");
        this.value = this.value + newValue;
    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values