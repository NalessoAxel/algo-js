
const readlineSync = require('readline-sync')

function multiRand(n) {
    for (let i = 0; i <n; i++) {
        array_new.push(rand10())
    }
   
    console.log('The random numbers are ' + array_new)
}

function average(arr) {
    
    const total = arr.reduce((acc, c) => acc + c, 0);
    return total / arr.length;
}

function min(arr) {
     return(Math.min.apply(null, arr));
    
}

function max(arr) {
    return(Math.max.apply(null, arr));
}

function rand10() {
    let min = 1
    let max = 10
    return Math.floor(Math.random() * (max - min) ) + min;
}

let userNumber = readlineSync.question("How many numbers u want? ");
let array_new = [];
 
multiRand(userNumber);
console.log('the minimum number is ' + min(array_new));
console.log('the maximum number is ' + max(array_new));
console.log('the average number is ' + average(array_new));
