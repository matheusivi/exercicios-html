/*
const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo')
const copy = document.querySelector('.copy')
const menu = document.querySelector('.menu')
const faq = document.querySelector('.faq')
const mapa = document.querySelector('.mapa')



//contato.replaceChild(mapa, titulo)
//contato.insertBefore(animais, mapa)

const novoH1 = document.createElement('h1')

novoH1.innerText = 'Novo Título'
novoH1.classList.add('titulo')


const tituloh1 = document.querySelector('h1')
const faq = document.querySelector('.faq')


const cloneH1 = tituloh1.cloneNode(true) 

faq.appendChild(cloneH1)
*/

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const p = copy.querySelector('p')
const cloneMenu = menu.cloneNode(true)
const faq = document.querySelector('.faq')
const dl = faq.querySelector('.faq-lista')


//copy.insertBefore(cloneMenu, p)

//const selecionado = dl.children[0]

//console.log(selecionado)

