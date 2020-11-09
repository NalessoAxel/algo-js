
const readlineSync = require('readline-sync')

function rand10() {
    let min = 1
    let max = 10
    return Math.floor(Math.random() * (max - min) ) + min;
}

/* 
Dans ma fonction multiRand 
Je créer une vraible array_new qui ajoute une array.
je creer une boucle qui s'inisialise a 0, ensuite je demande si 

*/


function multiRand(n) {
        let array_new = []
        for (let i = 0; i <n; i+=1) {
            array_new.push(rand10())
        }
        console.log(array_new)
}
let n = readlineSync.question('Give me a number')
console.log(multiRand(n))