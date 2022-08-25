// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2 === true;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(param1) {
  return param1.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let indiceMaior = numeros[0];
  let vezesAparece = 0;

  for (let index = 0; index < numeros.length; index += 1) {
    if (indiceMaior < numeros[index]) {
      indiceMaior = numeros[index];
    }
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === indiceMaior) {
      vezesAparece += 1;
    }
  }
  return vezesAparece;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciaCat1 = Math.abs(mouse - cat1);
  distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return 'cat2';
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

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
