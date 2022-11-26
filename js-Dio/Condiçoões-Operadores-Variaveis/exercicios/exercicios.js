/*const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media)

if (media < 5){
    console.log('Reprovaçãp')
} else if (media >= 5 && media <=7){
    console.log('Recuperação')
}else {
    console.log('Passou de Semestre')
};*/
/*
let peso = 103;
let altura = 1.87;
let calculo = peso / Math.pow(altura, 2);

console.log(calculo);

if (calculo < 18.5){
    console.log('Abaixo do peso')
}else if ( calculo >= 18.5 && calculo < 25){
    console.log('Peso normal')
}else if (calculo >= 25 && calculo < 30){
    console.log('Acima do peso')
}else if (calculo >= 30 && calculo < 40){
    console.log('Obeso')
}else {
    console.log('Obesidade Grave!')
}*/

/*
Lembrando que dá para facilitar a formação.
1 - A vista Débito, recebe 10% de desconto;
2 - A visita no dinheiro ou pix, recebe 15% de desconto.
3 - Em duas vezes, preço normal de etiqueta sem juros.
4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%;

*/


const precoEtiqueta = 100;
const formaDePagamento = 4; 


if ( formaDePagamento === 1 ){
    console.log( precoEtiqueta - (precoEtiqueta * 0.1) )
}else if (formaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
}else if (formaDePagamento === 3){
    console.log(precoEtiqueta)
}else {
    console.log( precoEtiqueta + (precoEtiqueta * 0.1 ))
}

