class UserController{

    constructor(form, inputs, table){
        this.form = form
        this.inputs = inputs
        this.table = table
        this.onSubmit()
    }
    onSubmit(){
        this.form.addEventListener("submit", (event) => {
            event.preventDefault()
            let user = this.getValues()
            this.addLine(user)
        })
    }
    addLine(user){
    
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>
                <img src="dist/img/avatar.png" class="img-circle img-sm" alt="Imagem do Usuário">
            </td>
            <td>${user.nome}</td>
            <td>
                ${user.email}
            </td>
            <td>${user.admin}</td>
            <td>${user.nascimento}</td>
            <td>
                <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-delete btn-xs btn-flat">Excluir</button>
            </td>`
    
        tbody.appendChild(tr)
    
    }
    //Retorna um usuário
    getValues(){
        let user={}
        this.inputs.forEach( (input) => {
            if(input.type == "radio" && !input.checked)
                return
            
            if(input.type == "checkbox"){
                user[input.name] = input.checked
                return
            }
            user[input.name] = input.value
        } )
        return new User(user.nome, user.genero, user.nascimento,
            user.nascionalidade, user.email, user.foto, user.admin)
    }

}