function produtos(app,req,res){

    let produtosData = new app.models.Produtos()
    produtosData.getProdutos(
        function(result){
            res.render("produtos/produtos", {produtos: result})
        }
    )
}

function cadProdutos(app,req,res){
    res.render("cadastro/cadastroProdutos")
}

function cadastrarP(app,req,res){
    let cadastrar = new app.models.Produtos(req.body)
    cadastrar.cadProdutos( ()=>{
        res.redirect('/')
    })
}

module.exports = {
    produtos: produtos,
    cadProdutos: cadProdutos,
    cadastrarP: cadastrarP
}