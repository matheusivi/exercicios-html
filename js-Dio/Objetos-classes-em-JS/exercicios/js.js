class Carro{
    marca;
    cor;
    kmMedioGasto;

    constructor(marca, cor, kmMedioGasto){
        this.marca = marca;
        this.cor = cor;
        this.kmMedioGasto = kmMedioGasto;
    }
    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia * this.kmMedioGasto * precoCombustivel;
    }
}

/*
const uno = new Carro('fiat', 'prata', 1/12)
console.log(uno)
*/
const uno = new Carro('Fiat', 'Prata', 1/12)
console.log(uno.calcularGastoDePercurso(70, 5))

const palio = new Carro('Fiat', 'Preto', 1/10)
console.log(palio.calcularGastoDePercurso(70,5))