const readlineSync = require('readline-sync')
let arr = ["Apple", "Pear", "Banana"];

for (let elem of arr) {
  console.log("Do you want to eat a " + arr[1] + "?");
}