var pessoa = {
    nome: 'Matheus',
    idade: 29,
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


var menu = {
    width: 800,
    height: 50,
    backgroundColor:'#432'
}

menu.backgroundColor = '#987'
menu.color = 'blue'

menu.esconder = function(){
    console.log('Esconder')
}

var bg = menu.backgroundColor;

//Tudo é um Objeto.

var nome = 'Matheus'

nome.length; 
nome.charAt(3);

nome.toLowerCase;

var valor = 1.8

valor.toFixed()
valor.toString()


var btn = document.querySelector('.btn')

var nomei1 = 'matheus'
nomei1.toLocaleLowerCase;
nomei1.toLocaleUpperCase;
nomei1.toUpperCase;
