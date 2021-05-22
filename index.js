function factorial(number) {
    if(number == 1) {
        return number 
    } else {
        return number * factorial(number - 1);
    }
}


// console.log(factorial(3));

function Checking(amount) {
    this.amount = amount;
    this.deposit = function(amount) {
        this.amount = this.amount + amount;
    }
    this.toString = function() {
        return `Balance: ${this.amount}`;
    }
}

// const checking = new Checking(20);
// console.log(checking.toString());
// checking.deposit(40);
// console.log(checking.toString());

let name = "jhon buendia";
let letters = name.split("");
let firstName = letters.splice(0, 3);

console.log(letters);
console.log(firstName);


