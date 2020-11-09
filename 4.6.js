const readlineSync = require('readline-sync')

function factorial(a) {
    if (a < 0) 
          return -1;
    else if (a == 0) 
        return 1;
    else {
        return (a * factorial(a - 1));
    }
  }

  let a = readlineSync.question('choose a number ')
console.log(factorial(a))



