// #VQV - LRLODI
// Desafio 1
function compareTrue( value1, value2 ) {
  if ( value1 === true && value2 === true ) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea( base, height ) {
  let area = ( base * height )/2;
  return area;
}

// Desafio 3
function splitSentence( string ) {
  let finalArray = [];
  let tempArray = '';

  for ( let index = 0; index < string.length; index += 1 ) {
    tempArray += string[index];
    if ( string[index + 1] === ' ' || index === string.length - 1 ) {
      finalArray.push(tempArray);
      tempArray = '';
    }
  }
  return finalArray;
}

// Desafio 4
function concatName(array) {

  let finalArray = [];
  finalArray.push(array[0]);
  finalArray.push(array[array.length - 1]);
  return finalArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints;
  totalPoints = ( wins * 3  ) + (ties);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {

  let highestNumber = 0;
  let counter = 0;

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > highestNumber){
      highestNumber = arrayOfNumbers[index];
    }
  }
    for (let index = 0 ; index < arrayOfNumbers.length; index += 1) {
      if(arrayOfNumbers[index] === highestNumber){
        counter += 1;
      }
    }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
