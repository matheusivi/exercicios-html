/*
const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[2]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);
 
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);


const link = document.querySelector('[href^="#"]');
console.log(link);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[2]);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

const primeiraUl = document.querySelector('ul');
primeiraUl.classList.add('grid-section')


console.log(gridSectionHtml);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(index);
});

const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach(function(item){
    console.log(item)
})
*/

const todasImg = document.querySelectorAll('[src^="img/"]')
console.log(todasImg); 

const imgApenas = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgApenas);

const apenasLinksInternos = document.querySelectorAll('[href^="#"]');
console.log(apenasLinksInternos);

const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

const todosP = document.querySelectorAll('p');
console.log(todosP[todosP.length - 1])

