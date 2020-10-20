var fs = require('fs')


function Produtos(){

}

Produtos.prototype.getProdutos = (callback)=>{
    fs.readFile('./data/produtos.json', (err,result)=>{

        if(!err){
            var obj = JSON.parse(result)
            callback(obj.produtos)
        }
    })
}

module.exports = ()=>{
    return Produtos
}