const readlineSync = require('readline-sync')


let n = readlineSync.question ("nombre?")
let p = 0;

for (i = 0; i <= n; i++) {
    if (i <= n) {
        p += i
    }
    
}
console.log(p)