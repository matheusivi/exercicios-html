/*
function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(25));

function pi(){
    return 3.14
}
var total = 5 * pi();
console.log(total)


//Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função. Você pode passar argumentos.
// peso e altura são os parâmentros
function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80)) // 80 e 1.80 são os argumentos
imc( 60, 1.70 ) // 60 e 1.70 são os arguementos

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Você gosta do céu';
    } else if(cor === 'verde'){
        return 'Você gosta de mato';
    }else {
        return 'você não gosta de nada';
    }
}

console.log(corFavorita('azul'))


addEventListener('click', function(){
    console.log('oi')
})


// Quando não definimos o return, ela irá retornar undefined.O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc2(peso, altura){
    const imc = peso / (altura ** 2);
    console.log(imc)
}

imc2(20, 1.8) // undefined


// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe a sua idade'
    }else if(idade >= 60){
        return true;
    }else{
        return false;
    }
}
console.log(terceiraIdade(60))


function faltaVisitar(paisesVisitados){
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(20))


//Escopo lexico

var profissao = 'Designer';

function dados(){
    var nome = 'André';
    var idade = 28;
    function outrosDados(){
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados();
}

console.log(dados())
*/
