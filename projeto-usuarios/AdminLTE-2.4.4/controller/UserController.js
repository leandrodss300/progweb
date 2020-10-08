class UserController{

    constructor(form, inputs, table){
        this.form = form
        this.inputs = inputs
        this.table = table
        this.onSubmit()
        this.onChangePhoto()
    }
    onChangePhoto(){
        let inputFoto = this.form.querySelector("[type=file]")
        inputFoto.addEventListener('change', (event) => {
            console.log(inputFoto.files[0])
            let reader = new FileReader()
            reader.readAsDataURL(inputFoto.files[0])
            reader.onload = function(){
                inputFoto.src = reader.result
            }
        })
    }
    onSubmit(){
        this.form.addEventListener("submit", (event) => {
            event.preventDefault()
            let user = this.getValues()
            console.log(user)
            this.addLine(user)
            this.resetForm()
            //Pegar os valores atuais --> querySelector
            
            //Adiciono +1 em usuarios
            if(user.admin){
                //Aducuibar +1 em administradores
            }
            //Atualizar os valores
        })
    }

    resetForm(){
        this.form.reset()
        this.form.querySelector("[type=file]").removeAttribute("src")
    }

    addLine(user){
    
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>
                <img src="${ user.foto!="" ? user.foto : 'dist/img/boxed-bg.png' }" class="img-circle img-sm" alt="Imagem do Usuário">
            </td>
            <td>${user.nome}</td>
            <td>
                ${user.email}
            </td>
            <td>${user.admin}</td>
            <td>${Utils.dateFormat(user.nascimento)}</td>
            <td>
                <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-delete btn-xs btn-flat">Excluir</button>
            </td>`
    
        this.table.appendChild(tr)
    
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
            if(input.type == "file"){
                user[input.name] = input.src
                return
            }
            user[input.name] = input.value
        } )
        return new User(user.nome, user.genero, user.nascimento,
            user.nascionalidade, user.email, user.senha, user.foto, user.admin)
    }

}