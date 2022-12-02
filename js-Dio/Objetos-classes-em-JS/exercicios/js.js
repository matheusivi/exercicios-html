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


class pessoa {
    nome;
    idade;
    altura;

    constructor(nome, idade, altura){
        this.nome= nome;
        this.idade= idade;
        this. altura= altura;
    }

    Imc(){
        return this.peso / (this.altura * this.altura)
    }

    informacao(){
        const informacao = this.Imc;
            if(informacao < 18.5 ){
                return ('Abaixo do peso')
            }else if(informacao >= 18.5 && informacao < 25){
                return ('Peso normal')
            }else if ( informacao >= 25 && informacao < 30){
                return ('Acima do peso')
            }else if(informacao >= 30 && informacao < 40){
                return ('Obesidade')
            }else {
                return ('Obesidade grave')
            }
        
    }
}

const matheus = new pessoa('matheus', 29, 1.87)
console.log(matheus.informacao())