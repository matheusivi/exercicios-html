class pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
/*
const matheus= new pessoa(); 
matheus.nome = 'Matheus W Oliveira';
matheus.idade = 29;

const vitor = new pessoa();
vitor.nome = 'vitor J Paula';
vitor.idade = 30;

console.log(matheus)
console.log(vitor)

matheus.descrever();
vitor.descrever();


const matheus = new pessoa('Matheus', 29)
console.log(matheus)*/

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const vitor = new pessoa('Vitor', 25);
const renan = new pessoa('Renan', 30);

compararPessoas(vitor, renan);