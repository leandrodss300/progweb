const express = require('express')
const path = require('path')

let app = express()

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/'))


app.get('/', (req,res) =>{
    res.render("views/index")
})

app.get('/users', (req,res) => {
    user = { 
        id: 1,
        nome: "Clemilton",
        email: "clemilton.ufam@gmail.com"
     }
     res.json(user)
})

app.get('/clientes', (req,res) =>{
    res.end("<h1> Seja bem-vindo, cliente! </h1>")
})

app.get('/produtos', (req,res) =>{
    res.end("<h1> Lista de Produtos </h1>")
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})