class CalculadoraController{
    //Método que é executado quando um objeto é instanciado
    constructor(){
        //Selecionar os botões
        this.buttons = document.querySelectorAll("#buttons > g")
        this.listaComandos = []
        this._display = document.querySelector("#display")

        this.inicializarButtons()
    }
    //Inicializar botões
    inicializarButtons(){
        this.buttons.forEach( btn => {
            //Imprimir a classe do botão
            //console.log(btn.className.baseVal)
            this.adicionarEventoBotao(btn,'click')
        } )
    }
    adicionarEventoBotao(btn,tipoEvento){
        btn.addEventListener(tipoEvento, event => {
            let nomeClasse = btn.className.baseVal
            let nomeBotao = nomeClasse.replace("btn-","")
            this.selecionaButton(nomeBotao)
        })
    }
    selecionaButton(nomeBotao){
        switch(nomeBotao){
            case "1":
                this.adicionarNumero(nomeBotao)
                break;
            case "2":
                this.adicionarNumero(nomeBotao)
                break;
            case "3":
                this.adicionarNumero(nomeBotao)
                break;
            case "4":
                this.adicionarNumero(nomeBotao)
                break;
            case "5":
                this.adicionarNumero(nomeBotao)
                break;
            case "6":
                this.adicionarNumero(nomeBotao)
                break;
            case "7":
                this.adicionarNumero(nomeBotao)
                break;
            case "8":
                this.adicionarNumero(nomeBotao)
                break;
            case "9":
                this.adicionarNumero(nomeBotao)
                break;
            case "soma":
                this.adicionarOperacao('+')
                break;
            case "soma":
                this.adicionarOperacao('+')
                break;
            case "soma":
                this.adicionarOperacao('+')
                break;
            case "soma":
                this.adicionarOperacao('+')
                break;
            case "igual":
                this.calcular()
                break;
        }
        console.log(this.listaComandos)
    }
    calcular(){
        //Transforma lista em string
       let expressao = this.listaComandos.join("")
       let result = eval(expressao)
       this.display = result
       this.atribuirResultado(result)

    }
    adicionarNumero(num){
        //Se o último cmd não for um número
        if( isNaN(this.ultimoComando) ){
            this.listaComandos.push(num)
        }else{
            //É um número -> concatenar
            let novoValor = this.ultimoComando.toString() + num.toString()
            this.ultimoComando = novoValor
        }
        this.display = this.ultimoComando
    }
    adicionarOperacao(op){
        this.listaComandos.push(op)
    }
    get ultimoComando(){
        return this.listaComandos[ this.listaComandos.length - 1 ]
    }
    set ultimoComando(cmd){
        this.listaComandos[this.listaComandos.length-1] = cmd
    }
    atribuirResultado(valor){
        this.listaComandos = [valor]
    }
    get display(){
        return this._display.innerHTML
    }
    set display(valor){
        this._display.innerHTML = valor
    }

}