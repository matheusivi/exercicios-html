const pessoa = {
    nome: 'Matheus William de Oliveira',
    idade: 29,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};
/*
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`); 
}

pessoa.descrever();

const atributo = 'idade'

console.log(pessoa[atributo])
console.log(pessoa['nome'])

pessoa['nome'] = 'teste'
console.log(pessoa['nome'])
//(forma dinâmica de trabalho)
//ou
pessoa.nome = 'teste'
console.log(pessoa['nome'])
*/

