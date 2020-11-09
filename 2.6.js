
const readlineSync = require('readline-sync')


let  userNumber = readlineSync.question("choisis ton numéro favoris entre 1 et 7 ")
    if(userNumber < 1) {
        console.log("recommence")
    }
    if (userNumber > 7 ) {
        console.log("recommence")
    } else {
        jour()
    } 
    function jour(){
        if (userNumber == 1) {
            console.log("lundi"
            )}
        if (userNumber == 2) {
            console.log("mardi"
            )}
        if (userNumber == 3) {
            console.log("mercredi"
            )}
        if (userNumber == 4) {
            console.log("jeudi"
            )}
        if (userNumber == 5) {
            console.log("vendredi"
            )}
        if (userNumber == 6){
            console.log("samedi"
        )} 
        if (userNumber == 7) {
            console.log("dimanche"
            )}
    }

