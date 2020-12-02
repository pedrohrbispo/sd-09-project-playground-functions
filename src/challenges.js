// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}
console.log(compareTrue(true, true));
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  if (base !== 0 && height !== 0) {
    let areaTriangulo = (base * height) / 2;
    return areaTriangulo;
  } return 'Valor do triângulo inválido!'
}
console.log(`A área do triângulo é: ${calcArea(10, 50)}`);
console.log(`A área do triângulo é: ${calcArea(10, 0)}`);

// Desafio 3
function splitSentence(string) {
  let novaString = string.split(' ');
  return novaString;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(words) {
  let ultimoPalavra = words.pop();
  return `${ultimoPalavra}, ${words[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 0;
  let empate = 0;
  let pontos = 0;
  if(wins === true){
    vitorias = 3;
  } else if (ties === true) {
    empate = 1;
  } else {
    return false;
  }
  return pontos = vitorias + empate;
}
console.log(footballPoints(true, true));

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  let maiorNum = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNum) {
      maiorNum = numeros[index];
    }
  } for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numeros[index2] === maiorNum) {
      contador += 1;
    }
  } return contador;
}
let numeros = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numeros));

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
