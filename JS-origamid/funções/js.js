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