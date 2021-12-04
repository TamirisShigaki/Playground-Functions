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
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
