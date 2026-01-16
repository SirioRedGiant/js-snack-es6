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


