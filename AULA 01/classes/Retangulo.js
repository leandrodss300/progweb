class Retangulo{
    //É um método que é executado quando uma instância é criado
    constructor(largura, altura, cor){
        console.log("O retângulo foi instanciado");
        this.largura = largura;
        this.altura = altura;//O atributo é criado dentro do constructor
        this.cor = cor;//O this vai ser sempre usado dentro de uma classe
    }

    getArea(){
        return this.largura*this.altura;
    }

    toString(){
        return `Largura: ${this.largura}\n Altura: ${this.altura}\n Area: ${this.getArea()}\n Cor: ${this.cor}`
    }
}