// Minhas funções

function biggestNumber(numbers) {
  let biggest = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggest) {
      biggest = numbers[index];
    }
  }
  return biggest;
}

function encodeDecode(string, input, output) {
  let newString = '';

  for (let key of string) {
    if (key === input[0]) {
      newString += output[0];
    } else if (key === input[1]) {
      newString += output[1];
    } else if (key === input[2]) {
      newString += output[2];
    } else if (key === input[3]) {
      newString += output[3];
    } else if (key === input[4]) {
      newString += output[4];
    } else {
      newString += key;
    }
  }
  return newString;
}

// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
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
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let total = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber(array)) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closerCat;
  let distance1 = Math.abs((cat1 - mouse));
  let distance2 = Math.abs((cat2 - mouse));

  if (distance1 < distance2) {
    closerCat = 'cat1';
  } else if (distance2 < distance1) {
    closerCat = 'cat2';
  } else if (distance1 === distance2) {
    closerCat = 'os gatos trombam e o rato foge';
  }
  return closerCat;
}

// Desafio 8
function fizzBuzz(array) {
  for (let key in array) {
    if ((array[key] % 3 === 0) && (array[key] % 5 === 0)) {
      array[key] = 'fizzBuzz';
    } else if (array[key] % 3 === 0) {
      array[key] = 'fizz';
    } else if (array[key] % 5 === 0) {
      array[key] = 'buzz';
    } else {
      array[key] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(phrase) {
  let input = ['a', 'e', 'i', 'o', 'u'];
  let output = ['1', '2', '3', '4', '5']
  return encodeDecode(phrase, input, output);
}
function decode(phrase) {
  let input = ['1', '2', '3', '4', '5']
  let output = ['a', 'e', 'i', 'o', 'u'];
  return encodeDecode(phrase, input, output);
}

// Desafio 10
function techList(array, name) {
  if (array.length > 0) {
    let newArray = [];
    array.sort();

    for (let index = 0; index < array.length; index += 1) {
      newArray[index] = {
        tech: array[index],
        name,
      }
    }
    return newArray;
  }
  return 'Vazio!'
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
