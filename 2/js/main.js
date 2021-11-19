/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

const names =  ['Piero', 'Antonio', 'Carlo', 'Matteo', 'Mario', 'Lucia', 'Simone'];

const lastName = ['Rossi', 'Verdi', 'Colombo', 'Santoro', 'Di Matteo', 'Gennari'];


// Array vuoto per immagazzinare le combinazioni
const newName = [];

for (let i = 0; i < names.length; i++) {


    //console.log(Math.floor(Math.random() * ((names.length - 1) + 1)) + 0);


    // Genero casualmente un valore dall'array
    const thisName = names[Math.floor(Math.random() * (names.length - 1 + 1)) + 0];
    const thisLastName = lastName[Math.floor(Math.random() * (names.length - 1 + 1)) + 0];

    alert(thisName + ' ' + thisLastName);

    const newName = thisName + ' ' + thisLastName;

    newNameArray.push(newName);
}

console.log(newNameArray);

// Formula per generare valore casuale
// Math.floor(Math.random() * (max-min + 1)) + min
