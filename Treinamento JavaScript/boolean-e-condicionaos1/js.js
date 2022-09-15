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