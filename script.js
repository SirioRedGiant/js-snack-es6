
/*
!   Snack 1
    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
*/

const racingBikes = [
  {
    name: "Bianchi",
    weight: "7.0",
  },
  {
    name: "Look",
    weight: "7.2",
  },
  {
    name: "Willier Triestina",
    weight: "7.5",
  },
  {
    name: "Pinarello",
    weight: "9.0",
  },
  {
    name: "Cornago",
    weight: "8.3",
  },
  {
    name: "Cervelo s5",
    weight: "7.8",
  },
  {
    name: "Canyon",
    weight: "9.2",
  },
  {
    name: "Merida Reacto Team",
    weight: "8.5",
  },
  {
    name: "Specialized",
    weight: "7.4",
  },
  {
    name: "Trek",
    weight: "6.8",
  },
];
/*
//note definisco una variabile con valore infinito ed una variabile vuota per la bici più leggera
let min = Infinity;
let lessWeightBike = null;

console.log(min);

for (let i = 0; i < racingBikes.length; i++) {
  // confronto il valore infinito con il primo elemento del ciclo. Ad ogni ciclo ci sarà il confronto, fino a trovare il valore minimo nell'array
  console.log(racingBikes[i].weight);
  if (racingBikes[i].weight < min) {
    console.log(racingBikes[i].name, "<-----");
    min = racingBikes[i].weight; // qui si aggiorna se troviamo un valore inferiore
    lessWeightBike = racingBikes[i]; // qui la bicicletta prende la chiave della bicicletta più leggera
    console.log(lessWeightBike, "e lei");
  }
  console.log(lessWeightBike, "e lei");
}
console.log(lessWeightBike, "e lei");

console.log(`The lighter bike is: ${lessWeightBike.name}`);
*/
/**
*!    SNAKE 2
*     Creare un array di oggetti di squadre di calcio.
      Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
      Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
      Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
      Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

const footballClubs = [
  {
    squadName: "Milano",
    points: 0,
    takenFauls: 0,
  },
  {
    squadName: "Casalpusterlengo",
    points: 0,
    takenFauls: 0,
  },
  {
    squadName: "Fombio",
    points: 0,
    takenFauls: 0,
  },
  {
    squadName: "Sondrio",
    points: 0,
    takenFauls: 0,
  },
  {
    squadName: "Genova",
    points: 0,
    takenFauls: 0,
  },
];

/**
 *todo    Funzione che dato un valore max ed uno min restituisce un numero casuale
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.table(footballClubs);


//note     usare la funzione definita sopra per cambiare i valori di points e takeFauls
for (let i = 0; i < footballClubs.length; i++) {
  footballClubs[i].points = randomGenerator(0, 24); //max è 24 perchè numero massimo di punti
  footballClubs[i].takenFauls = randomGenerator(0, 160); // tenendo conto che i falli possono variare ma in un caso estremo circa 20 a partita 
}

console.table(footballClubs)