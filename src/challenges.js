// Desafio 1
function compareTrue(parte1, parte2) {
  if (parte1 === true && parte2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2)
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let primeriaArray = array[0];
  let ultimaArray = array[array.length -1];
  let concatenacao = ultimaArray + ", " + primeriaArray
  return (concatenacao)
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return (resultado)
}

// Desafio 6
function highestCount(array) {
  let maiorNum = array[0];
  let quantRepeticao = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNum) {
      maiorNum = array[i];
    } 
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNum) {
      quantRepeticao += 1;
    } 
  }
  return quantRepeticao
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
 
  if (distanciaCat1 < 0) {
    distanciaCat1 = distanciaCat1 * (-1)
  } else if (distanciaCat2 < 0) {
    distanciaCat2 = distanciaCat2 * (-1)
  }

  if (distanciaCat1 === distanciaCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distanciaCat1 < distanciaCat2) {
   return "cat1";
  } else {
    return "cat2";
  }
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
  // seu código aquindhn
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
};