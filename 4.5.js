const readlineSync = require('readline-sync')

let x1 = 5;
let x2 = 2;
let y1 = 3;
let y2 = 4;

let calcDistance = (x_1, y_1, x_2, y_2) => {
    let a = Math.pow((x_1 - x_2), 2);
    let b = Math.pow((y_1 - y_2), 2);
    return Math.sqrt(a + b);
}

console.log(calcDistance(x1, x2, y1, y2))