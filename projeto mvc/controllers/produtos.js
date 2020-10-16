function produtos(app,req,res){

    let produtosData = new app.models.Produtos()
    produtosData.getProdutos(
        function(result){
            res.render("produtos/produtos", {produtos: result})
        }
    )
}

module.exports = {
    produtos: produtos
}