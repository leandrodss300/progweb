var fs = require('fs')


function Usuarios(body){
    console.log("chegou aqui!")
    if(body){
        this.nome = body.nome
        this.idade = body.idade
        this.endereco = body.endereco
        this.numero = body.numero
        this.bairro = body.bairro
        this.cidade = body.cidade
        this.estado = body.estado
    }
}

Usuarios.prototype.getUsuarios = (callback)=>{
    fs.readFile('./data/usuario.json', (err,result)=>{

        if(!err){
            var obj = JSON.parse(result)

            //console.log(obj.usuarios)
            callback(obj.usuarios);
        }
    })
}

Usuarios.prototype.cadUsuarios = function(callback){
    var cadastroUsuarios = {
        nome: this.nome,
        idade: this.idade,
        endereco: this.endereco,
        numero: this.numero,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado
    }
    fs.readFile('./data/usuario.json', (err,result)=>{

        if(!err){
            var obj = JSON.parse(result)
            var idd = obj.usuarios[obj.usuarios.length]
            cadastroUsuarios.id = idd
            obj.usuarios.push(cadastroUsuarios)
            console.log(obj)
            let str = JSON.stringify(obj)
            fs.writeFile('./data/usuario.json', str, (err)=>{
                if(err)
                    throw err
                console.log("Arquivo atualizado!")
                callback(obj.usuarios)
            })
        }
    })
}

module.exports = ()=>{
    return Usuarios
}