function soma(x1, x2){
    return x1 + x2
}

var result = soma(4,4)
console.log(result)

function calc(x1,x2,operador){

    switch(operador){
        case "+":
            return x1+x2
        case "-":
            return x1-x2
        case "*":
            return x1*x2
        case "/":
            return x1/x2
        case "%":
            return x1%2
        default:
            return false
    }

}

console.log(calc(4,4,"*"))

function calc2(x1,x2,operador){
    return eval(` ${x1} ${operador} ${x2} `)
}

console.log(calc2(8,7,"*"));

var num = (function(x1,x2,operador){
                return eval(` ${x1} ${operador} ${x2} `)
            }) (10,10,"*")

console.log(num)

var f = (function(x1,x2,operador){
    return eval(` ${x1} ${operador} ${x2} `)
})

console.log(f(89,13,"%"))

//ARROW FUNCTIONS

let calc3 = (x1,x2,operador) => {
    return eval(` ${x1} ${operador} ${x2} `)
}

console.log(calc3(7,7,"*"))