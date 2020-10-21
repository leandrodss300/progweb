module.exports = function(app){
    app.get('/produtos', function(req,res){
        app.controllers.produtos.produtos(app,req,res)
    })

    app.get('/cadastroProdutos', function(req,res){
        app.controllers.produtos.cadProdutos(app,req,res)
    })

    app.post('/cadProduto', function(req,res){
        app.controllers.produtos.cadastrarP(app,req,res)
    })
}