/*
const animaisLista = document.querySelector('.animais-lista');

const height = animaisLista.scrollHeight
console.log(height)

const animaisTop = animaisLista.offsetTop;
console.log(animaisTop)
const animasLesft = animaisLista.offsetLeft;
console.log(animasLesft)

const primeiroH2 = document.querySelector('h2')

const rect = primeiroH2.getBoundingClientRect()
console.log(rect)


console.log(
    window.innerWidth,
    window.outerWidth,
    window.pageyoffset
)

const small = window.matchMedia('(max-width: 600px)').matches

if(small){
    console.log('Usuário mobile')
}else{
    console.log('Usuário desktop')
}
*/

const img = document.querySelector('img')
const imgTop = img.offsetTop
console.log(imgTop)


function somarImg(){
 let soma = 0;   
 const imgs = document.querySelectorAll('img');
 imgs.forEach((imagen) => {
    soma += imagen.offsetWidth
 })
 console.log(soma)
}

 window.onload = function(){
    somarImg()
 }


 const links = document.querySelectorAll('a');
 
 links.forEach((link)=>{
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight
    if(linkWidth > 48 && linkHeight > 48){
        console.log(link, 'Possui acessibilidade')
    }else{
        console.log(link, 'Não possui boa acessibilidade')
    }
 })


 const browserSmall = window.matchMedia('(max-width: 720px)').matches

 if(browserSmall){
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
 }