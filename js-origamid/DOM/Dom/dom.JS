//window.alert('Isso mesmo!');

//window.location.href // mostra o endereço que estou usando. 

const href = window.location.href
document.querySelector('h1');

if(href === 'http://127.0.0.1:5500/Dom/index.html'){
    console.log('é igual')
}

const h1Selecionado = document.querySelector('h1')
const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em ', h1Selecionado.innerText)
})

const exerc = window.location.href;
console.log(exerc);

const treinamento = document.querySelector('h2');
const trinamentoC = treinamento.classList;
console.log(trinamentoC);

const navegador = navigator.language;
console.log(navegador);

const larg = window.innerHeight
console.log(larg)