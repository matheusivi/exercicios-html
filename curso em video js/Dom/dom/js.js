function clicar() {
    var a = window.document.getElementById('area')
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}
function entrar() {
    var a = window.document.getElementById('area')
    a.innerText = 'Entrou!'
    a.style.background = 'blue'
}
function sair(){
    var a = window.document.querySelector('div#area')
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}
// esse evente listener são uma forma de trabalhar com o javaScript, eliminando assim, do html para não ficar tão poluido.
//a.addEventListener('clicl', clicar)
//a.addEventListener('mouseenter', entrar)
//a.addEventListener('mouseout', sair)