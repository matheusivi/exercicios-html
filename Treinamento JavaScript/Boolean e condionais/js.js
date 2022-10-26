
/*
var x;
var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiGraduacao){
    console.log('é verdadeiro');
    var x = 10;
}else if(possuiDoutorado){
    console.log('É falso')
}

console.log(x);



var nome = ''

if(nome){
    console.log(nome)
} else{
    console.log('Nome não existe')
}
//uma string sem nada, ela é considerada falsa.
/*
false
if(false)/ if(0)/ if(NaN)/ if(null)/ if(undefined)/ if(''). Todas essas vão dar false.



Operadores lógicos
if(!true)// false
if(!1) // false
if(!'')// true
if(!undefined)// true
if(!!'  ')// true
if(!! '')// false

Operadores de comparação
O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===.

10 =='10' // true
10 == 10 // true
10 === '10' // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' //
*/
/*
Operadores lógicos &&

true && true// true
true && false // false
false && true // false
'gato' && 'cão' // 'cão'
(5 - 5) && (5 + 5)// 0
'Gato' && false // false
(5 >= 5) && (3 < 6)// true


if((5 - 10 ) && (5 + 5)){
    console.log('verdadeiro');
} else {
    console.log('Falso');
}

if((5 - 5 ) && (5 + 5)){
    console.log('verdadeiro');
} else {
    console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5);
if (condicional){
    console.log('verdadeiro', condicional);
} else {
    console.log('Falso')
}
*/

/*
|| Compara se uma expressão OU outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
( 5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); true

Retorna o primeiro valor true que encontrar.


var condicional2 = (5 - 5) && (5 + 5) || (10 - 2);
console.log(condicional2);
Quem comanda sempre sera a última expressão. sendo && ou ||.


var corFavorita = 'preto'

switch(corFavorita){
    case 'azul':
        console.log('Olhe para o céu')
        break;
    case 'amarelo':
        console.log('Olhe para o sol')
        break;
    case 'verde':
         console.log('Olhe para a floresta')
         break;

        console.log('Feche os olhos')

}
*/

var minhaIdade = 29;
var idadeParente = 39;
if(minhaIdade > idadeParente){
    console.log('Mais velho')
}else if (minhaIdade === idadeParente){
    console.log('igual')
}else{
    console.log('Mais novo')
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
console.log(expressao);

var brasil = 207; 
var china = 1340;

if(brasil >= china){
    console.log('Mais habitantes')
}else{
    console.log('Menos habitante')
}

if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
}else {
    console.log('Falso')
}

if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão')
}else{
    console.log('Falso')
}

var nome = 'Matheus';
var idade = 29;
var possuiFaculdade = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!possuiFaculdade, !!idade, !!empregoFuturo, !!dinheiroNaConta)