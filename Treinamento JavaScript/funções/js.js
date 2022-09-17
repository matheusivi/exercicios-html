// função = bloco de código que pode ser executado e reutilizado. valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(12));

function pi() {
    return 3.14;
}
var total = 5 * pi();
console.log(total)

// ao criar um função, você pode definir parâmetros.
// ao executar uma função, você pode passar argumento.

function imc(peso, altura) {
    var imc = peso /(altura * altura)
    return imc;
}
console.log(imc(80, 1.8));

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Você gosta de céu';
    } else if( cor === 'verde') {
        return 'Você gosta de mato';
    } else{
        return 'Você não gosta de nada';
    }
}

console.log(corFavorita(''));

//Argumentos podem ser funções, chamados de callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function(){
    console.log('oi')
})