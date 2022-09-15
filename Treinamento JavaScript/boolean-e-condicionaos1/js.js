 var possuiGraduacao = true;

 if(possuiGraduacao) {
    console.log('É verdadeiro');
    var x = 10;
 } else {
    console.log('É falso')
 }

 console.log(x);

 //Se o if não for verdadeiro, ele testa o else if

 var possuiGraduacao = false;
 var possuiDoutorado = true;

 if(possuiGraduacao) {
    console.log('É verdadeiro')
 } else if(possuiDoutorado){
    console.log('Possui Doutorado')
 } else {
    console.log('Não possui nada')
 }

 var nome = '' 

 if(nome){
    console.log(nome);
 } else{
    console.log('Nome não existe')
 }

 // O operador !, nega uma operação booleana. Ou seja, !true é igual a false.

 // Operadores de comparação, vão sempre retornar um valor booleano
 
 10 > 5;
 10 > 10;
 10 <= 10;


 // O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

var x = 10;

console.log(x == 10)

var y = '10'

console.log( y === 10 )

var z = 11
console.log(x !== 11)

/*true && true; true
true && false; false
false && true; false
'gato' && 'cão'; 'cão'
(5 - 5) && (5 + 5); 0 aqui porque o zero é falso
'gato' && false; false
( 5 >= 5) && (3 < 6); true
*/

if((5 -5) && ( 5 + 5)){
   console.log('Verdadeiro')
} else {
   console.log('Falso');
}

var condicional = (5 - 10) && ( 5 + 5);
if(condicional){
   console.log('Verdadeiro', condicional)
} else {
   console.log('Falso');
}

/* || Compara se uma expressão ou outra é verdadeira
true || true; true
true || false; true
false || true; true
'gato || 'cão; 'gato'
(5 - 5) || ( 5 + 5); 10
'gato' || false; gato
( 5>= 5) || ( 3 < 6); true
&& sobre sai sobre ||
 */

var condicional2 = ( 5 - 5 ) || (5 + 5) && ( 10 - 2)
console.log(condicional2);

/*  Switch, Com o Swicht você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/

var corFavorita = 'Amarelo'

switch (corFavorita){
   case 'Azul':
      console.log('Olha para o céu');
      break;
      case 'Vermelho':
         console.log('Olhe para rosas.');
         break;
      case 'Amarelo':
         console.log('Olhe para o sol.');
         break;
    default:
            console.log('Feche os olhos.')
}