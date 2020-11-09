const readlineSync = require('readline-sync')

let minNumber = readlineSync.question ('choose a min number');
let maxNumber = readlineSync.question ('choose a max number');


if (minNumber > maxNumber) {
    console.log('stop all buddy')

} else {
    
let curentNumber = readlineSync.question ('choose a number');

if (curentNumber > minNumber && maxNumber < maxNumber) {
    console.log("Your number is between " + minNumber + " and " + maxNumber )
} else {
    console.log("Your number is not  between " + minNumber + " and " + maxNumber)
}
}