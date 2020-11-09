const { forestgreen } = require("color-name")

function moyenne(liste) {
    let somme = 0
    for(let element of liste){
        somme += nombre
    }
    return somme/liste.length
}
function max(liste) {
    let plusGrandNombre = liste[0]
    for(let nombre of liste) {
        if(nombre > plusGrandNombre)
        plusGrandNombre = nombre
    }
    return plusGrandNombre
}
function min(liste) {
    let plusPetitNombre = liste[0]
    for(let nombre of liste) {
        if(nombre < plusPetitNombre)
        plusPetitNombre = nombre
    }
    return plusPetitNombre
}
const listeDeNombres = [5, 13, 355, 67, 82];

console.log(min(listeDeNombres))


// Abordé un algo 
// 1) Identifier le problème
// 2) Qu'est qu'on a comme entrées?
// 3) Qu'est qu'on a comme sortie?
// 4) Decomposé le problème