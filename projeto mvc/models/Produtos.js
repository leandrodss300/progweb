var fs = require('fs')


function Produtos(name){
    this.name = name
}

Produtos.prototype.getProdutos = (callback)=>{
    fs.readFile('./data/produtos.json', (err,result)=>{

        if(!err){
            var obj = JSON.parse(result)
        }
    })
}

module.exports = ()=>{
    return Produtos
}