// Desafio 1
function compareTrue(value1, value2) {
  let result = undefined
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let triangle = [];
  triangle = ((base * height) / 2);
  return triangle;
}
console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(split) {
  let string = split;
  return console.log(string.split(' '));
}
splitSentence('go Trybe');

// Desafio 4
function concatName(arraySTR) {
  let string = arraySTR.reverse(' ');
  return console.log(string);
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return console.log(totalPoints);
}
footballPoints(10, 5);

// Desafio 6
function highestCount(arrayNumbers) {
let numbers = [  ];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let value = arrayNumbers[index];
    if (numbers[value] === undefined) {
      numbers[value] = 1;
    } else {
      numbers[value] += 1;
    }
  }
  let sumRepeated = 0;
  for (let key in numbers) {
    if (sumRepeated < numbers[key]) {
      sumRepeated = numbers[key];
    }
  }
  return console.log(sumRepeated);
}
highestCount([9, 1, 2, 3, 9, 5, 7])

// Desafio 7
function catAndMouse(cat1, cat2) {
  if (cat1 > cat2) {
    console.log(cat1);
  } else if (cat1 < cat2) {
    console.log(cat2);
  } else {
    console.log('os gatos trombam e o rato foge')
  }
  return console.log
}
catAndMouse(10, 10)

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = []
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0){
      result.push('fizzBuzz');
    } else if (arrayNumbers[index] % 5 === 0) {
      result.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0){
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return console.log(result);
}
fizzBuzz([2, 15, 7, 9, 45]);
