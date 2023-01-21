/*
function areaQuadrado(lado){
    return lado * lado
}

console.log(areaQuadrado(5))

function pi(){
    return 3.14;
}

var total = 5 * pi();
console.log(total)


function imc(peso, altura){
    var imc = peso / ( altura * altura)
    return imc
}

console.log(imc(105, 1.87))


function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do céu'
    }else if(cor === 'verde'){
        return 'Eu gosto de floresta'
    }else {
        return 'eu não gosto de cores'
    }
}

console.log(corFavorita('verde'))


addEventListener('click', function(){console.log('oi')})

function mostreConsole(){
    console.log('oi')
}

addEventListener('click', mostreConsole)


function imc2(peso, altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20,1.8);

console.log(imc2(2000,1.8));


function terceiraIdade(idade){
    if( typeof idade !== 'number'){
        return 'Por favor, preencha com Número!'
    }else if (idade >= 60){
        return true;
    }else {
        return false;
    }
}

console.log(terceiraIdade('sessenta'));

var totalPaises = 193;
function faltaVisitar(paisesVisitados){
   
    return `Falta visitar ${totalPaises - paisesVisitados}`
}
console.log(faltaVisitar(20));
*/
var profissao = 'Farmáceutico';

function dados(){
    var nome = 'Matheus';
    var idade = 28;
    function outrosDados() {
        var endereco = 'Mato Grosso do Sul';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados())