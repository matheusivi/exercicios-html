// class Carro{
//     constructor(marca, modelo, ano){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//     }
    
//     get obterinformacoes(){
//         return `O carro é ${this.marca} do modelo ${this.modelo} e do ano ${this.ano}`
//     }

//     #anoDeUso(){
//            return 2024 - this.ano
//     }
    
//     get idadeCarro(){
//         return `O carro tem${this.#anoDeUso()} anos.`
//     }
// }

// const carro = new Carro('Volkswagen ', 'Gol', 2015);
// console.log(carro.idadeCarro)

// class Animal{
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// class Mamifero extends Animal{
//     constructor(nome, idade, tipoDePelo, som){
//         super(nome, idade); // lembra que o super é o this herdando do pai.
//         this.tipoDePelo = tipoDePelo;
//         this.som = som;
//     }

//     get vozAnimal(){
//         return `O animal faz ${this.som}`
//     }

// }

// class Ave extends Animal{
//     constructor(nome, idade, tipoDeBico, voa){
//         super(nome, idade);
//         this.tipoDeBico = tipoDeBico;
//         this.voa = voa;
//     }

//     get podeVoar(){
//         return `Esta avê pode voar? ${this.voa}!`
//     }
// }

// const mamifero = new Mamifero ('lobo', 23, 'cinzento ', 'Auuuu');
// console.log(mamifero.som);

// const ave = new Ave ('Corvo', 8, 'pequeno e fino', 'Sim' );
// console.log(ave.podeVoar);

// class Livro {
//     constructor(titulo, autor, preco){
//         this.titulo = titulo;
//         this.autor = autor;
//         this.preco = preco;
//     }

//     mostrarInformacoes(){
//         return `O titulo do livro é ${titulo}, e nome do autor é ${autor}, e o preco do livro é ${preco}`;
//     }
// }

// class LivroFisico extends Livro{
//     constructor(titulo, autor, preco, peso){
//         super(titulo, autor, preco);
//         this.peso = peso;
//     }

//     custoEnvio(valorEnvio){
//         return `O custo do envio é de ${this.peso * valorEnvio}R$.`
//     }
// }


// class Ebook extends Livro{
//     constructor(titulo, autor, preco, tamanhoMB){
//         super(titulo, autor, preco);
//         this.tamanhoMB = tamanhoMB;
//     }

//     verificarTamanhoMB(quatPagina){
//         return `O tamanho do Ebook é de ${this.tamanhoMB * quatPagina} KB`
//     }

// }


// class Calculadora {

//     #valor1
//     #valor2    
//     constructor(valor1 , valor2){
//         this.#valor1 = valor1
//         this.#valor2 = valor2
//     }

//    get raizQuadrada(){
//         return Math.sqrt(this.#valor1)
//     }

//    get potenciacao(){
//         return Math.pow(this.#valor1, this.#valor2)
//     }

//    get somar(){
//         return this.#valor1 + this.#valor2
//     }

//    get subtrair(){
//         return this.#valor1 - this.#valor2
//     }

//    get multiplicar(){
//         return this.#valor1 * this.#valor2
//     }

//     get dividir(){
//         return this.#valor1 / this.#valor2
//     }
// }

class ItemBiblioteca{
    
    obterInformacoes(){
        return `Neste biblioteca há apenas livros e DVD'S.`
    }
}


class Livro extends ItemBiblioteca{
    
    obterInformacoes(){
        return `Os livros são variados, com diversos conteúdos.`
    }
}

class DVD extends ItemBiblioteca{
    
    obterInformacoes(){
        return `Há diversos estudos e apresentações em dvds, na sua própria ala.`
    }
}

const livro = new Livro();
const dvd = new DVD();
const item = new ItemBiblioteca();
console.log(item.obterInformacoes())