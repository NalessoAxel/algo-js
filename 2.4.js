
const readlineSync = require('readline-sync')



for ( let i = 1; i<=100; i++) {
    if( i % 2 == 0 ) {
        console.log(i + ' ' + 'even number')
    } else if (i % 3 == 0) {
        console.log(i + ' ' + 'odd number')
    }
 }