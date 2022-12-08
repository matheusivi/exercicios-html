/*
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
/*
const uno = new Carro('Fiat', 'Prata', 1/12)
console.log(uno.calcularGastoDePercurso(70, 5))

const palio = new Carro('Fiat', 'Preto', 1/10)
console.log(palio.calcularGastoDePercurso(70,5))



class Pessoa{
    nome;
    peso;
    altura;
    

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }


    Imc(){
        return this.peso / (this.altura * this.altura);
    }

    classificar(){
     const classificacao = this.Imc();
        if (classificacao < 18.5){
            return ('Abaixo do peso');
        }else if(classificacao >= 18.5 && classificacao < 25){
            return ('Peso normal');
        }else if( classificacao >= 25 && classificacao < 30){
            return ('Acima do peso');
        }else if(classificacao >= 30 && classificacao < 40){
            return ('Obeso')
        }else{
            return ('Obesidade Grave')
        }
    }
}

const jose = new Pessoa('jose', 70, 1.75)
console.log(jose.classificar());

const renan = new Pessoa('renan', 63, 1.75)
console.log(renan.classificar())

const matheus = new Pessoa('matheus', 103, 1.85)
console.log(matheus.classificar())
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura; 
    }
    Imc(){
        return this.peso / ( this.altura * this.altura)
    }

    Calculo(){
    const calcular = this.Imc();
    if (calcular < 18.5){
        return console.log('Abaixo do peso')
    }else if(calcular >= 18.5 && calcular < 25){
        return console.log('Peso normal')
    }else if (calcular >= 25 && calcular < 30){
        return console.log('Acima do peso')
    }else if(calcular >= 30 && calcular < 40){
        return console.log('Obeso')
    }else{
        return console.log('Obesidade Grave')
    }
    }
}

const matheus = new Pessoa ('matheus', 104, 1.87)
console.log(matheus.Calculo())