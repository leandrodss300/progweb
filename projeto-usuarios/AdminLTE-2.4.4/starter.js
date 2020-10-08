
let form = document.querySelector("#form-usuarios")
//Selecionando elementos que tem o atributo name
let inputs = document.querySelectorAll("#form-usuarios [name]")
let tbody = document.querySelector("#table-body")
let user = {}
/*
console.log(inputs)
form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    //Pegando o Nome
    //user[ inputs[0].name ] = inputs[0].value
    //Pegando o e-mail
    // user[ inputs[5].name ] = inputs[5].value
    inputs.forEach( (input) => {
        if(input.type == "radio" && !input.checked)
            return
        
        if(input.type == "checkbox"){
            user[input.name] = input.checked
            return
        }
        user[input.name] = input.value
    } )
    console.log(user) 
    addLine(user)
})

function addLine(user){
    
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
*/
let controller = new UserController(form, inputs, tbody)
