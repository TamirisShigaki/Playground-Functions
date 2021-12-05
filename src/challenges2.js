// Desafio 10
function techList(array, name) {
  let arraytech = [];
  for (let tech = 0; tech < array.sort().length; tech += 1) {
      arraytech.push({
      tech: array[tech],
      name: name,
    });
  }
  if (arraytech.length === 0) {
    return 'Vazio!';
  }
  return arraytech;
}

// Desafio 11
function generatePhoneNumber(array) {
  let repeticao = 0;
  let numTel = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]

  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9 || repeticao >= 3) {
    return "não é possível gerar um número de telefone com esses valores";
    }
    repeticao = 0
    for (let index = 0; index < array.length; index += 1) { //pega a outra posição
      if (array[i] === array[index]) {
      repeticao += 1
      }
    }
  }
  return numTel
}

console.log (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
