/*
const alunos = ['joão', 'vitor', 'marina'];

alunos.push('matheus')

alunos[1] = 'Renan'

console.log(alunos)


const alunos = [];

alunos.push('teste');
alunos.push(10);
console.log(alunos);


const alunos = ['1', '2', '3']
 console.log(alunos);

 console.log(alunos.pop());

 console.log(alunos);
 

 const notas = [];

 notas.push(5);
 notas.push(7);
 notas.push(8);
 notas.push(2);
 notas.push(5);
 notas.push(8);

const soma = notas [0] + notas[1] + notas[2] + notas[3] + notas[4];


const nome = 'Vitor Johansen Guerra';

    for (let i = 0; i < nome.length; i++) {
        const letra = i;
        console.log(letra)
    }
*/

const notas = [];


notas.push(5);
notas.push(10);
notas.push(10);

    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        soma = soma + nota;
        
    }
    const media = soma / notas.length
    console.log(media);

    