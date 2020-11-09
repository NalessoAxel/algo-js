const readlineSync = require('readline-sync')



/* surface = longueur x largeur */


/* 
Descirption de la function calcSurface

Cette fonction appelle 2 variables (Width & Length)
cette function retourne l'opération mathématiques multiplication


*/
let width = (readlineSync.question("choose a width"))
let length = (readlineSync.question("choose a length"))

    function calcSurface(width, length) {
        return width * length
}

console.log('The area of your rectangle is ' + calcSurface(length, width));   