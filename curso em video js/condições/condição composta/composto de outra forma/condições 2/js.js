/*
var idade = 16
console.log (`Você tem ${idade} anos.`)
if ( idade < 16) {
    console.log( 'Não vota')
} else if(idade >= 16 && idade < 18 || idade > 65){
    console.log('Voto opcional')

} else{
    console.log('Voto obrigatorio')
} */

let idade = 66
console.log(`Sua idade é ${idade} anos`)
if ( idade < 16){
    console.log('Não pode votar')
} else if( idade >= 16 && idade < 18 || idade >= 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório!')
}