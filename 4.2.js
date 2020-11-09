const readlineSync = require('readline-sync')

function rand10() {
    let min = 1
    let max = 10
    return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(rand10())