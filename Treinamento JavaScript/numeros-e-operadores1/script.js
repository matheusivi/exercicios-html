var idade = 23;
console.log(idade);

var tamanho = 2e2;
console.log(tamanho)

//Operadores aritméticos

var soma= 100 + 50
console.log(soma)

var subtracao = 100 - 50;
console.log(subtracao)

var multiplicacao = 100 * 2;
console.log(multiplicacao)

var expoente = 2 ** 4;
console.log(expoente);

var modulo = 14 % 5
console.log(modulo)
 
// String

var soma = '100' + 50
console.log(soma)

var subtracao = '100' - 50
console.log(subtracao)

var multiplicacao = '100' * '2'
console.log(multiplicacao)

var divisao = 'comprei 10' / 2
console.log(divisao)

var testeNaN = 'isso é 100' / 2
console.log(isNaN(testeNaN));

var total1 = 20 + 5 * 2
console.log(total1)

var total2 = (20 + 5) * 2
console.log(total2)

var total3 = 20/2 * 5
console.log(total3)

var total4 = 10 + 10 * 2 + 20 / 2
console.log(total4)
// esse incrimento esta para frente do x, por isso que soma depois.
var x = 5;
console.log(x++);
console.log(x)
// esse incremento esta para trás do x, por isso que soma antes.
var x = 5;
console.log(++x);
// o mesmo ocorre com o descremento
var x = 5;
console.log(--x);

var x = 5;
console.log(x--)
console.log(x);

var idade = '28';
var somaIdade = 5;

console.log(+idade + somaIdade);

var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

var n1 = '24s';
var n2 = '33e';
var total = +n1 + -n2;
console.log(total)
var expressao1 = 'teste'/ 2;
console.log(expressao1)

var n3 = '200';
var n4 = 50;
var total = n3 + n4;
console.log(+n3 + n4);

var x = 5;
console.log(++x);

var numero = '80' / 2;
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = peso / 2;
console.log(peso)