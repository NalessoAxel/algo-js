const readlineSync = require('readline-sync')

let array = [100, 403, 58]

var min = Math.min.apply(null, array)
var max = Math.max.apply(null, array)

console.log(min + " " + max)  