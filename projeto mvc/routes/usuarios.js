module.exports = function(app){
    app.get('/', function(req,res){
        app.controllers.usuarios.index(app,req,res)
    })
    
    app.get('/cadastroUsuarios', function(req,res){
        app.controllers.usuarios.cadUsuarios(app,req,res)
    })

    app.post('/cadUsuario', function(req,res){
      
        app.controllers.usuarios.cadastrarU(app,req,res)
        
    })
}