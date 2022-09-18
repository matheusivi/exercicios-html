var n1 = Number(window.prompt('Digite um número: '))
var n2 = Number(window.prompt('Digite outro número: '))
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)
// number + number para adição
// string + string para concatenação

//string > Number

//number.parseInt(n) > uma conversão de um número para o número inteiro.
// number.parseFloat(n) > converter para real.

//numero > string

//String(n)
// n.toString()

//Formatar para String

//s.length quantos caracteres a string tem
// s.toUpperCase() tudo para 'maiúscula'
// s.toLowerCase() tudo para 'minúscula'

var nome = window.prompt('Qual é seu nome?')
document.write(`Seu nome tem ${nome.lenght} letras.`)