const animais = document.getElementById('animais');
console.log(animais);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSelectionHtml = document.getElementsByClassName('grid-section');
const gridSelectionNode = document.querySelectorAll('grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSelectionHtml);
console.log(gridSelectionNode)