//const animais = document.getElementById('animais');
//console.log(animais.innerHTML);

//const gridSection = document.getElementsByClassName('grid-section');
//console.log(gridSection);
/*
const primeiraUl = document.querySelector('ul');
//console.log(primeiraUl);

//const linkInterno = document.querySelector('[href^="#"]');
//console.log(linkInterno);
//const animaisImg = document.querySelectorAll('.animais img');
//console.log(animaisImg);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

//console.log(gridSectionHtml);
//console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(item);
})

const arrayGrid = Array.from(gridSectionHtml);


arrayGrid.forEach(function(item, index){
    console.log(item);
})
*/

//EXERCICIOS
/*
const imgHtml = document.getElementsByTagName('img');

const imgNode = document.querySelectorAll('img')

console.log(imgHtml);
console.log(imgNode);


const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imagensAnimais)


const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno)


const primeiroItem = document.querySelector('.animais-descricao h2');
console.log(primeiroItem);

//outra forma.

const primeiroItem = document.querySelector('.animais-descricao');
const h2Animais = primeiroItem.querySelector('h2')

console.log(h2Animais)



const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1])

const imgs = document.querySelectorAll('img');

let i = 0
imgs.forEach(function(item, index, array){
   // console.log(item, index, array)
})

    const titulos = document.getElementsByClassName('titulo');
    const tituloArray = Array.from(titulos);

    console.log(titulos);
    console.log(tituloArray);

    tituloArray.forEach(function(item, index, array){
        console.log(item, index, array)
    })

    const titulos = document.getElementsByClassName('titulo');
    const tituloArray = Array.from(titulos);

tituloArray.forEach((item, index) => {
        console.log(item, index)
});


    let i = 0
    imgs.forEach(function(){
        console.log(i++)

        versão curta

        imgs.forEach(() => console.log(i++)
    })


const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
    //console.log(item, index, array)
})

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
    console.log(item, index)
})


const imgs = document.querySelectorAll('img');

imgs.forEach((item) =>{
    console.log(item);
})


const imgs = document.querySelectorAll('img');

let i = 0;
imgs.forEach(function(){
    console.log(i++)
});

// ou versão mais curta e que vai ser utilizada.

imgs.forEach(() => console.log(i++));


const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);

paragrafo.forEach((item)=>{
    console.log(item)
});


const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index)
})

let i = 0;
imgs.forEach(() => {
    console.log(i++)
})

imgs.forEach(() => i++);
console.log(i);
*/

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul')


if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul')
}else {
    menu.classList.add('Não-possui-azul');
}

menu.className += ' vermelho'
//console.log(menu.classList)

const animais = document.querySelector('.animais');
console.log(animais.attributes);

const img = document.querySelector('img');
//console.log(img.getAttribute('src'))

const srcImg = img.getAttribute('alt')
console.log(srcImg)

img.setAttribute('alt', 'é uma raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

const carro = {
    portas: 4;
    andar: function(km) {
        console.log(`Andou ${}`)
    }
}

