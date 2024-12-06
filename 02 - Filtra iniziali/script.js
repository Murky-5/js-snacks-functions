/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function nameFirstCharacter(nameLenght) {
    initialCharacter = []
    for (let i = 0; i < names.length; i++){
        nameLenght = names[i]
        if (nameLenght[0] === "A") {
            initialCharacter.push(nameLenght)
        }
    }
    return initialCharacter
}

// Invoca la funzione qui e stampa il risultato in console

console.log(nameFirstCharacter());

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]