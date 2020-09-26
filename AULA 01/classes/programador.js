class Programador extends Pessoa{
    constructor(nome, idade, anosExperiencia){
        //chamando o construtor de Pessoa
        super(nome,idade);
        this._anosExperiencia = anosExperiencia;
    }
    get anosExperiencia(){
        return this._anosExperiencia;
    }
    set anosExperiencia(anosExperiencia){
        this._anosExperiencia = anosExperiencia;
    }
}