module.exports = function(app){
    app.get('/produtos', function(req,res){
        app.controllers.produtos.produtos(app,req,res)
    })
}