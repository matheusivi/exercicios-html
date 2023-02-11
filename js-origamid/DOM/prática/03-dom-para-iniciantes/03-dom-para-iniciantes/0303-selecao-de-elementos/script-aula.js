//const animais = document.getElementById('animais');
//console.log(animais.innerHTML);  

const gridSelector = document.getElementsByClassName('grid-section');
console.log(gridSelector[0]);

const primeiraLi = document.querySelector('li');
console.timeLog(primeiraLi);

const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisIMg = document.querySelectorAll('.animais img');
console.log(animaisIMg[0]);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiroUl.classList.add('grid-section');
console.log(gridSectionHtml);
console.log(gridSectionNode);

