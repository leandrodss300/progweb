//VARIAVEIS
var msg = "Ola Mundo!";
console.log(msg)
console.log(typeof (msg))

var inteiro = 2
console.log("tipo:" + typeof (inteiro))

var bool = true || false
console.log(bool + "tipo: " + typeof (bool))

//COMPARACOES
var a = 10;
var b = "10";

//comparar apenas o conteudo
console.log(a == b)

//compara o conteudo e tipo de dados
console.log(a === b)
//compara se e igual
console.log(a != b)
//compara  o tipo
console.log(a !== b)

//ARRAYS

var frutas = ["Maçã", "Banana"]
console.log(frutas)
//RETORNAR TIPO OBJETO
console.log(typeof (frutas))
console.log(frutas[0] + "," + frutas[1])

// TEMPLATE STRING
numero = 4
for (let i = 1; i <= 10; i++) {
    console.log('${i}x${n}=${i*numero}')
}