//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari 



// Creo un array di numeri interi
let numberArray = [4, 8, 9, 10, 3, 22, 39, 26, 7, 21, 22, 1];
// console.log (numberArray);


//Creo un array vuoto che conterrà i numeri con indice dispari
let numberEven = [];
// console.log (numberEven);

// Eseguo un ciclo FOR per selezionare i numeri con indice dispari
let sumNumberEven = 0;

for (let i = 0; i < numberArray.length; i++ ) {
    if ( i % 2 == 1 ) {
        numberEven.push (numberArray [i]);

        // Eseguo la somma dei numeri selezionati
        sumNumberEven += numberArray [i];        
    }
}

// Stampo la somma
// console.log(sumNumberEven);

alert(sumNumberEven);


