/*
var pessoa = {
    nome: "Matheus",
    idade: 29,

}
console.log(pessoa);


var quadrado = {
    lados: 4,
    area: function(lado){ // ou pode juntar area(lado)
        return lado * lado;
    },
    perimetro: function(lado){ // mesma forma perimetro(lado), funciona da mesma forma a função.
        return this.lados * lado; 
    }
}


console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
};

menu.backgroundColor = '#000';
console.log(menu.backgroundColor);

var height = 120;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: "#84e",
    metadeHeight(){
        return  height / 2;
    }
}


var dados = {
    nome: 'Matheus',
    sobrenome: 'Oliveira',
    idade: 29,
    cidade: "Nova Andradina",
    profissão: 'Farmacêutico',
    outrosDados(){
        var nomeCompleto = 'Matheus William de OLiveira';
        return nomeCompleto
    }
}

dados.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.marca = 'ferrari';
carro.portas = 2;


var animal = {
    tipo: 'Cachorro',
    cor: 'Preto',
    raca: 'Labrador',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'Latir';
        }else{
            return 'Nada';
        }
    }
}
*/

//TUDO É OBJETOS!!!

console.log(11.8.toFixed());
console.log(11.3.toFixed());


function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado.toString());// envolveu a função em uma string.

console.log(areaQuadrado.length) // me mostra o quando tem de parametros na função.
