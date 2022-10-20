 /*
 let num = [5, 8, 2, 9, 3]
 num.push(1)
 num.sort()
 console.log(num)
 console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro numero do vetor é ${num[0]}`)
*/
/*


console.log(valores)

for (let pos=0; pos < valores.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

let valores = [8, 1 , 7, 4, 5, 9]
valores.sort()

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(-1)
console.log(`O valor está na posição ${pos}`)

if(pos== -1){
    console.log('O valor não foi encontrado!')
}else{
console.log(`O valor está na posição ${pos}`)
}