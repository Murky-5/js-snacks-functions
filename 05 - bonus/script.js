/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

function daySpan(name) {
    let daySpan = new Date()
    let dayTime = daySpan.getHours()
    let greetings;
    if (0 <= dayTime && dayTime < 12) {
        greetings = `Buongiorno ${name}`
    } else if (dayTime < 17) {
        greetings = `Buon pomeriggio ${name}`
    } else if (dayTime < 24) {
        greetings = `Buonasera ${name}`
    }
    return greetings
}

// Invoca la funzione qui e stampa il risultato in console

console.log(daySpan(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.