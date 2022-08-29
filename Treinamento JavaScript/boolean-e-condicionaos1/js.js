var possuiGraduacao = true;

if(possuiGraduacao) {
    console.log('é verdadeiro');
    var x = 10;
} else {
    console.log('é falso')
}

console.log(x)

// Se o if não for verdadeiro, ele testa o else if;

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao){
    console.log('Possui graduação, mas não possui doutorado');  
} else{
    console.log('Não possui graduação');
}

//Truthy e Falsy

var nome = ''

if(nome){
    console.log(nome)
} else{
    console.log('nome não é existe');
}

var nome = '10kg' / 10;

if(nome){
    console.log(nome);
} else {
    console.log('nome não existe')
}

if(!possuiGraduacao) {
    console.log(possuiGraduacao);
    console.log('Não possui graduação');
}