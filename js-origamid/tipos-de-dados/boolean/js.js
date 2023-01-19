/*
var possuiGraduacao = false;

if(possuiGraduacao){
    console.log('É verdadeiro')
    var x = 10;
}else{
    console.log('É falso')
    var x = 10;
}

console.log(x)


var possuiGraducao = false;
var possuiGraducao = true;

if(possuiGraducao){
    console.log('É verdadeiro');
}else if(possuiDoutorado){
    console.log('Possui Doutorado');
}else {
    console.log('Não possui nada');
}


var nome = '10kg' / 10;

if(nome) {
    console.log(nome);
}else {
    console.log('Nome não existe')
}


var x = 'Gato';

console.log(x != 'gato');

if((5 - 5) && ( 5 + 5)){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
};

var condicional = (5 - 3) && ( 5 + 5);
if(condicional){
    console.log('Verdadeiro', condicional)
}else{
    console.log('Falso')
};

var condicional2 = (5 - 5) || ( 5 + 5) && ( 10 - 2);
console.log(condicional2);


var corFavorita = 'Azul';

switch (corFavorita){
    case 'Azul':
    console.log('Olhe para o céu')
    break

    case 'Verde':
    console.log('Olhe para a floresta');
    break

    case 'Amarelo':
    console.log('Olhe para o Sol')
    break

    default:
        console.log('Feche os olhos')
}
*/

var minhaIdade = 29;
var idadeParente = 30;

if( minhaIdade > idadeParente){
    console.log('Sou mais velho')
}else if (minhaIdade === idadeParente){
    console.log('Mesma idade')
}else {
    console.log('Sou mais novo')
}

var expressao = ( 5 - 2 ) && (5 - ' ') && (5 - 2);
console.log(expressao);

var nome = 'André';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Maior em população');
}else {
    console.log('Menor em população')
}

if(('Gato' === 'gato') || (5 > 2 )){
    console.log('Gato' && 'Cão');
}else{
    console.log('Falso');
}