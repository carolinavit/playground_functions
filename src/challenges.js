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
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(cat2 - mouse);
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
function encode(string) {
  let newString = string;
  newString = newString.replaceAll('a', '1');
  newString = newString.replaceAll('e', '2');
  newString = newString.replaceAll('i', '3');
  newString = newString.replaceAll('o', '4');
  newString = newString.replaceAll('u', '5');
  return newString;
}

function decode(string) {
  let newString = string;
  newString = newString.replaceAll('1', 'a');
  newString = newString.replaceAll('2', 'e');
  newString = newString.replaceAll('3', 'i');
  newString = newString.replaceAll('4', 'o');
  newString = newString.replaceAll('5', 'u');
  return newString;
}

// Desafio 10
function techList(tecnologias, nome) {
  if (
    tecnologias === undefined ||
    tecnologias.length === 0 ||
    nome === undefined
  ) {
    return 'Vazio!';
  }
  let arrayTech = [];
  let tecnologiasOrdenadas = tecnologias.sort();
  for (let index = 0; index < tecnologiasOrdenadas.length; index += 1) {
    let objeto = { tech: tecnologiasOrdenadas[index], name: nome };
    arrayTech.push(objeto);
  }
  return arrayTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
