module.exports = function(app){
    app.get('/', function(req,res){
        app.controllers.usuarios.index(app,req,res)
    })
}