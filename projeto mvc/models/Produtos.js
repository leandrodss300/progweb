var fs = require('fs')


function Produtos(body){
    console.log("chegou aqui!")
    if(body){
        this.nome = body.nome
        this.preco = body.preco
    }
}

Produtos.prototype.getProdutos = (callback)=>{
    fs.readFile('./data/produtos.json', (err,result)=>{

        if(!err){
            var obj = JSON.parse(result)
            callback(obj.produtos)
        }
    })
}

Produtos.prototype.cadProdutos = function(callback){
    var cadastroProdutos = {
        nome: this.nome,
        preco: this.preco
    }
    fs.readFile('./data/produtos.json', (err,result)=>{

        if(!err){
            var obj = JSON.parse(result)
            obj.produtos.push(cadastroProdutos)
            console.log(obj)
            let str = JSON.stringify(obj)
            fs.writeFile('./data/produtos.json', str, (err)=>{
                if(err)
                    throw err
                console.log("Arquivo atualizado!")
                callback(obj.produtos)
            })
        }
    })
}

module.exports = ()=>{
    return Produtos
}