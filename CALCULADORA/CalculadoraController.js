class CalculadoraController{
    //Método que é executado quando um objeto é instanciado
    constructor(){
        //Selecionar os botões
        this.buttons = document.querySelectorAll("#buttons > g, parts > g")
        this.listaComandos = []
        this._display = document.querySelector("#display")
        let dataElement = document.querySelector('#data')
        let date = new Date();
        dataElement.innerHTML = date.toLocaleDateString('pt-BR');

        var horaElement = document.querySelector('#hora')
        setInterval(function(){
            horaElement.innerHTML = new Date().toLocaleTimeString('pt-BR')
        },1000)

        horaElement.innerHTML = date.toLocaleTimeString('pt-BR')

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
            case "0":
                this.adicionarNumero(nomeBotao)
                break;
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
            case "multiplicacao":
                this.adicionarOperacao('*')
                break;
            case "divisao":
                this.adicionarOperacao('/')
                break;
            case "subtracao":
                this.adicionarOperacao('-')
                break;
            case "igual":
                this.calcular()
                break;
            case "ponto":
                this.adicionarPonto(".")
                break;
            case "ac":
                this.apagarTudo()
                break;
            case "ce":
                this.apagarCe()
                break;
            case "porcento":
                this.adicionarOperacao("%")
                
                break;
        }
        console.log(this.listaComandos)
    }
    calcular(){
        //Transforma lista em string
        if(this.listaComandos[1] == "%"){
            let valor = this.listaComandos[0]*this.listaComandos[2]/100
            this.listaComandos = valor
            this.display = valor
        }else{
            let expressao = this.listaComandos.join("")
            let result = eval(expressao)
            this.display = result
            this.atribuirResultado(result)
        }

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
    adicionarPonto(po){
        //Se o último cmd não for um número
        if( isNaN(this.ultimoComando) ){
            if(this.ultimoComando = "."){
                let ponto = this.ultimoComando.toString() + po.toString()
                this.ultimoComando =ponto
            }else{
                this.listaComandos.push(num)
            }
        }else{
            //É um número -> concatenar
            let novoValor = this.ultimoComando.toString() + po.toString()
            this.ultimoComando = novoValor
        }
        this.display = this.ultimoComando
    }
    apagarTudo(){
        this.listaComandos = this.listaComandos = []
        this.display = "0"
    }
    apagarCe(){
        //let ce = this.ultimoComando
        //this.listaComandos = this.listaComandos.splice(0,this.listaComandos.length - 1)
        console.log(this.listaComandos)
        if(this.listaComandos.length <= 1){
            this.display = "0"
            this.listaComandos = []
        }else if(this.listaComandos.length === 2){
            this.listaComandos = this.listaComandos.splice(0,this.listaComandos.length - 1)
            this.display = this.ultimoComando
        }
        //this.display = this.ultimoComando
        /*
        if( isNaN(this.ultimoComando) ){
            console.log("ce")
            this.listaComandos = this.listaComandos.splice(0,this.listaComandos.length - 1)
            this.display = this.ultimoComando 
        }else if(this.listaComandos.length==0){
            this.display = "0"
            return;
        }*/
    }
    adicionarOperacao(op){
        this.listaComandos.push(op)
    }
    primeiroValor(){
        this.listaComandos.indexOf(0)
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
//Audio.play()
//let audio = new Audio("click.mp3")