/*
const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul')
menu.classList.toggle('azul')

if(menu.classList.contains('azul')){
    menu.classList.add('Possui-azul')
}else{
    menu.classList.add('Não-possui-Azul')
}

const animais = document.querySelector('.animais');

//console.log(animais.attributes['class'])

const img = document.querySelector('img');

console.log(img.getAttribute('src'))

img.setAttribute('alt', 'É uma raposa')

const possui= img.hasAttribute('alt')
console.log(possui)
*/

const addAtivo = document.querySelectorAll('.menu a')

addAtivo.forEach((a) => {
    a.classList.add('ativo')
})

addAtivo.forEach((a) => {
    a.classList.remove('ativo')
})

addAtivo[0].classList.add('ativo')


const verificarImg = document.querySelectorAll('img')

verificarImg.forEach((img) => {
  const tem = img.hasAttribute('alt')
    console.log(img, tem)
})


const modificar = document.querySelector('a[href^="https"]')

modificar.setAttribute('href','www.google.com' )

console.log(modificar)

