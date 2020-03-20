//6

const age

if (age >= 14 && age <= 90);

//7

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

//8

// 1 and 3

//9

let login = prompt("Who's there?", "")

if (login == "Admin"){
    let password = prompt("Password?", "");
    if (password == "The Master"){
        alert("Welcome!");
    } else if (password == "" || password == null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (login == "" || login == null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}

