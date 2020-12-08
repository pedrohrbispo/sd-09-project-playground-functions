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
  return (wins * 3) + ties;
}
console.log(footballPoints(10, 5));

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
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstDistance = Math.abs(mouse - cat1);
  let secondDistance = Math.abs(mouse - cat2);
  if (firstDistance < secondDistance) {
    return 'cat1';
  } else if (firstDistance > secondDistance) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';

  // if (firstDistance < 0) {
  //   firstDistance = 0;
  //   if (firstDistance < secondDistance) {
  //   return 'cat1'
  //   } 
  // }
  // if (secondDistance < 0) {
  //   secondDistance = 0;
  //  if (firstDistance > secondDistance) {
  //   return 'cat2';
  //   }
  // }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(lista) {
  let proxima = [];
  let proximaCont = 0;
  for (let index = 0; index < lista.length; index += 1) {
    proximaCont = lista[index];
    if (proximaCont % 3 === 0 && proximaCont % 5 === 0) {
      proxima.push('fizzBuzz');
    } else if (proximaCont % 3 === 0) {
      proxima.push('fizz');
    } else if (proximaCont % 5 === 0) {
      proxima.push('buzz');
    } else proxima.push('bug!');
  } return proxima;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
let novaString = '';
let string = 'hi there!';
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
      let word = string[index];
    switch (word) {
      case 'a':
      novaString = novaString + '1';
        break;
      case 'e':
      novaString = novaString + '2';
      break;
      case 'i':
      novaString = novaString + '3';
      break;
      case 'o':
      novaString = novaString + '4';
      break;
      case 'u':
      novaString = novaString + '5';
      break;
      default:
      novaString = novaString + word;
    }
  }console.log(novaString);
}
encode(string);

let outraString = 'h3 th2r2!';
function decode(outraString) {
  let novaString = '';
  for (let index = 0; index < outraString.length; index += 1) {
  let word = outraString[index];
    switch (word) {
      case '1':
      novaString = novaString + 'a';
      break;
      case '2':
      novaString = novaString + 'e';
      break;
      case '3':
      novaString = novaString+ 'i';
      break;
      case '4':
      novaString = novaString + 'o';
      break;
      case '5':
      novaString = novaString + 'u';
      break;
      default:
      novaString = novaString + word;
    }
  }console.log(novaString);
}
decode(outraString);

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
