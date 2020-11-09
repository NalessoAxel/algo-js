const readlineSync = require('readline-sync')

let favoriteNumber

while (favoriteNumber !==42) {
    favoriteNumber = readlineSync.question("What's your favorite number?", ' ')
    if(favoriteNumber == 42) {
        console.log('this is a great number !')

    }else if (favoriteNumber !== 42) {
        console.log('Are you sure?')
    } 
    }


    