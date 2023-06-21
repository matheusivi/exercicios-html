/*
function areaQuadrado(lado){
    return lado * lado
}

var p1 = areaQuadrado(4)
console.log(p1)


function pi(){
    return 3.14
}

var total = 5 * pi();
console.log(total)


function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc
}

var peso1 = imc(80, 1.80)
var peso2 = imc(60, 1.70)

console.log(peso1)

function corFavoritra(cor){
    if(cor === 'azul'){
        return 'Eu gosto do céu'
    }else if(cor === 'verde'){
        return 'eu gosto de mato'
    }else{
        return 'eu não gosto de cores'
    }
}

var ex1 = corFavoritra('verde')
console.log(ex1)


addEventListener('click', function(){
    console.log('Clicoou')
})


function imc2(peso, altura){
    const imc = peso /(altura ** 2)
    console.log(imc)
}

imc2(20, 1.8)

function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Por favor preencha com número'
    }else if(idade >= 60){
        return true;
    }else{
        return false
    }
}

console.log(terceiraIdade(61))

function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(20))

 
var profissao = 'Designer'
 function dados(){
    
    var nome = 'André';
    var idade = 28;
    function outrosDados(){
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return  ` ${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados();
 }

 console.log(dados());

*/


function valorVerdadeiro(idade){
    if(idade>= 18){
        return 'Verdadeiro'
    }else{
        return 'Falso'
    }
}
valor = valorVerdadeiro(19)
console.log(valor)

function perimetro(lado){
    soma = 4*lado
    return soma
}

somaPerimetro = perimetro(16)
console.log(somaPerimetro)

function nomeCompleto(nome, sobrenome){
    return `O nome completo é ${nome} de ${sobrenome}`
}

todoNome = nomeCompleto('Matheus', 'Oliveira')
console.log(todoNome)

function numeroPar(valor){
    if(valor % 2 == 0 ){
        return 'Este numero é Par'
    }else{
        return 'Este numero é ímpar'
    }
}

par = numeroPar(2)
console.log(par)

function argumento(dados){
    return dados
}

tipoDados = argumento('vez')
console.log(typeof(tipoDados))


addEventListener('click', function(nome){
    console.log('Matheus William')
})



