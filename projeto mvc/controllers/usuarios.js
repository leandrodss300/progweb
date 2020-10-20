function index(app,req,res){
    
    let usuariosData = new app.models.Usuarios()
    console.log(usuariosData.getUsuarios);
    
    usuariosData.getUsuarios(
        function(result){
            res.render("usuarios/index", {usuarios: result})
            
        }
    )

}

function cadUsuarios(app,req,res){
    res.render("cadastro/cadastroUsuarios")
}

function cadastrarU(app,req,res){
    let cadastrar = new app.models.Usuarios(req.body)
    cadastrar.cadUsuarios( ()=>{
        res.redirect('/')
    })
}

module.exports = {
    index: index,
    cadUsuarios: cadUsuarios,
    cadastrarU: cadastrarU
}