var fs = require('fs')


function Usuarios(){
    
}

Usuarios.prototype.getUsuarios = (callback)=>{
    fs.readFile('./data/usuario.json', (err,result)=>{

        if(!err){
            var obj = JSON.parse(result)
            console.log(obj)
            callback(obj);
        }
    })
}

module.exports = ()=>{
    return Usuarios
}