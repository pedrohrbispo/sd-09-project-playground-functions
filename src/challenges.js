// Desafio 1

function compareTrue( value1, value2 ) {
  // seu código aqui
  if ( value1 === true && value2 === true ) {
    return true;
  } 
  
  return false;

}

// Desafio 2
function calcArea( base , height ) {
  // seu código aqui
  let valueArea = ( base * height ) / 2;

  return valueArea;

}

// Desafio 3
function splitSentence( phrase ) {
  // seu código aqui
  let array = phrase.split( " " );

  return array;

}

// Desafio 4
function concatName( arrayString ) {
  // seu código aqui
  for ( let index = 0; index < arrayString.lenght; index += 1 ) {
    while (index === 0 || index < varr.length - 1) {
      console.log(arrayString[index]);

      break;
    }
  }
}
let varr = ["arroz", "feijao", "macarrao"];
concatName(varr);

// Desafio 5
function footballPoints() {
  // seu código aqui

}

// Desafio 6
function highestCount() {
  // seu código aqui
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

