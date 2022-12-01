/*
 const divisor = 7
for (let i = 1; i <= 10; i++) {
   
  
    console.log(i * divisor); 
}

const mes = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11 , 12];

for (let i = 0; i < mes.length; i++) {
    const numero = mes[i];

    if(numero % 2 === 0 ){
        console.log(numero)
    }
}
*/
numerosPares= []

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares)