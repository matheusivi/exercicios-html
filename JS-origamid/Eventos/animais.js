/*
const img = document.querySelector('img');
function callback(event){
    console.log(event)
}


//img.addEventListener('click', callback)

const animaisImg = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
}

animaisImg.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){ 
     event.preventDefault()
    console.log(event)
}

linkExterno.addEventListener('click', handleLinkExterno)


const h1 = document.querySelector('h1')

function handleEvent(event){
    console.log(event.type, event)
}

//h1.addEventListener('click', handleEvent)
//h1.addEventListener('mouseenter', handleEvent)
//h1.addEventListener('mousemove', handleEvent)

//window.addEventListener('scroll', handleEvent)
//window.addEventListener('rezise', handleEvent)
//window.addEventListener('keydown', handleEvent)
 

function handleKeyBorad(event){
    if(event.key === 'f'){
        document.body.classList.toggle('fullscreen')
    }  
}
window.addEventListener('keydown', handleKeyBorad)

const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.target.getAttribute('src'))
}

imgs.forEach((img) =>{
    img.addEventListener('click', handleImg)
}) */

const links = document.querySelectorAll('a[href^="#"]');

function cliqueNoLink(event){
    event.preventDefault()
    links.forEach((item)=>{
        item.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}

links.forEach((link)=>{
    link.addEventListener('click', cliqueNoLink)
})

// 2 exercicio

const todosDocs = document.querySelectorAll('body *');


function handlebody(event){
    //console.log(event.currentTarget)
    //event.currentTarget.remove();
}

todosDocs.forEach((documentos) => {
     documentos.addEventListener('click', handlebody)   
})




todosDocs.forEach((documentos) => {
     documentos.addEventListener('click', handlebody)   
})


function teclaT(event){
    if(event.key ==='t'){
       document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', teclaT)


