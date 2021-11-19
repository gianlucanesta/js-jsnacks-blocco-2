//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente
// e a inserirli nell'array fino a quando a somma degli elementi è minore di 50. 



// Imposto valore iniziale somma a 0
let sumNumber = 0;

let numberContainer = []; 

while (sumNumber < 50) {
    const numberArray = parseInt( prompt ('Ciao inserisci un numero'));                
    // console.log(numberArray);
    if (!isNaN(numberArray)) {

    numberContainer.push(numberArray);
    // console.log(numberContainer);

    sumNumber += numberArray; 
    // console.log(sumNumber);
    

      }
}


alert('Il risultato è: ' sumNumber);
