/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function nameFirstLetter(nameLenght) {
    initialLetter = []
    for (let i = 0; i < names.length; i++){
        nameLenght = names[i]
        initialLetter.push(nameLenght[0])
    }
    return initialLetter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(nameFirstLetter());

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]