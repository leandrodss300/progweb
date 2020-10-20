const express = require('express')
const consign = require('consign')


var app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views','./views')

consign()
    .include('routes')
    .then('models')
    .then('controllers')
    .into(app)



app.listen(3000, ()=>{
    console.log('APP rodando na porta 3000')
})