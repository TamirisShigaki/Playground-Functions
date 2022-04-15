// Desafio 1
function compareTrue(parte1, parte2) {
  if (parte1 === true && parte2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let primeriaArray = array[0];
  let ultimaArray = array[array.length - 1];
  let concatenacao = `${ultimaArray}, ${primeriaArray}`;
  return (concatenacao);
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return (resultado);
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
  return quantRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;

  if (distanciaCat1 < 0) {
    distanciaCat1 *= (-1);
  } else if (distanciaCat2 < 0) {
    distanciaCat2 *= (-1);
  }

  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayString = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      arrayString.push('fizz');
    } else if (array[i] % 5 === 0) {
      arrayString.push('buzz');
    } else if (array[i] % 3 !== 1 || array[i] % 5 !== 1) {
      arrayString.push('bug!');
    }
  }
  return arrayString;
}

// Desafio 9
function encode(frase) {
  for (let i = 0; i < frase.length; i += 1) {
    switch (frase[i]) {
    case 'a':
      frase = frase.replace('a', 1);
    case 'e':
      frase = frase.replace('e', 2);
    case 'i':
      frase = frase.replace('i', 3);
    case 'o':
      frase = frase.replace('o', 4);
    case 'u':
      frase = frase.replace('u', 5);
    }
  }
  return frase;
}

function decode(frase) {
  for (let i = 0; i < frase.length; i += 1) {
    switch (frase[i]) {
    case '1':
      frase = frase.replace(1, 'a');
    case '2':
      frase = frase.replace(2, 'e');
    case '3':
      frase = frase.replace(3, 'i');
    case '4':
      frase = frase.replace(4, 'o');
    case '5':
      frase = frase.replace(5, 'u');
    }
  }
  return frase;
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
