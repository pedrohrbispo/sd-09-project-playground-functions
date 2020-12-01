//Bruno Brolesi

// Desafio 1
function compareTrue(firstValue, secondValue) {
  return (firstValue && secondValue);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(strings) {
  return (strings[strings.length - 1] + ', ' + strings[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumberIndex = 0;
  let counter;

  for (let i in numberArray) {
    if (numberArray[highestNumberIndex] < numberArray[i]) {
      highestNumberIndex = i;
      counter = 1;
    } else if (numberArray[highestNumberIndex] == numberArray[i]) {
      counter++;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanceMouseCat1 = Math.abs(mouse - cat1);
  distanceMouseCat2 = Math.abs(mouse - cat2);

  if(distanceMouseCat1 < distanceMouseCat2)
  {
    return('cat1');
  } else if (distanceMouseCat1 > distanceMouseCat2){
    return ('cat2');
  } else{
    return('os gatos trombam e o rato foge');
  }
}

console.log(catAndMouse(-1, -5, 5));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
