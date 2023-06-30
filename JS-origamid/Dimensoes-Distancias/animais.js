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

const primeiraImg = document.querySelector('img')

const distancia = primeiraImg.offsetTop
//console.log(distancia)

function somarImgs(){
const imgs = document.querySelectorAll('img')
    let soma = 0;
    imgs.forEach((imagem) => {
    soma = soma + imagem.offsetWidth
    
})
console.log(soma)
}

window.onload = function(){
    somarImgs()
}




const recomendado = window.matchMedia('(max-width: 48px)').matches

if(recomendado){
    console.log('Recomendado')
}else{
    console.log('Não é recomendado')
}




const browser = window.matchMedia('(max-width: 720px)').matches

