var cor = prompt('Escreva uma cor')
/*
if(cor === "verde"){
    console.log("va em frente")
} else if (cor === "amarelo") {
    console.log("atenção")
} else if (cor === "vermelho") {
    console.log("PARE")
} */

switch (cor) {

    case "verde":
        console.log("siga")
        break
    case "amarelo":
        console.log("atenção")
        break
    case "vermelho":
        console.log("pare")
        break
    default:
        console.log("INVALIDO")

}

var i
for (i = 1; i <= 10; i++) {
    console.log(i)
}