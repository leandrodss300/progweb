var frutas = ["Mamão","Banana","Maçã"]
var i
for (i=0; i < frutas.length ; i++){
    //console.log(fruta[i])
}

frutas.push("Laranja")
function imprime1(elemento){
    console.log(elemento)
}

frutas.forEach(imprime1)

console.log('---------------------')

function imprime2(elemento, indice){
    console.log(elemento, indice)
}

frutas.forEach(imprime2)

function imprime3(elemento, indice, array){
    console.log(array)
    console.log(elemento, indice)
}

console.log('---------------------')
frutas.forEach(imprime3);

console.log('---------------------')
var pos = frutas.indexOf("Laranja")
var removido = frutas.splice(pos,1)
console.log(frutas)
console.log(removido)

var frutas = ["Mamão", "Banana", "Maçã", "Laranja", "Abacaxi", "Abacate", "Kiwi"]
console.log('---------------------')
var pos = frutas.indexOf("Banana")
var removido = frutas.splice(pos,4)
console.log(frutas)
console.log(removido)