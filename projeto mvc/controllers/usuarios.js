function index(app,req,res){
    
    let usuariosData = new app.models.Usuarios()
    console.log(usuariosData.getUsuarios);
    
    usuariosData.getUsuarios(
        function(result){
            res.render("usuarios/index", {usuarios: result})
        }
    )

}

module.exports = {
    index: index
}