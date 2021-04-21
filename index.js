var escreva = require("scanf");
console.log("Digite o seu peso")
var peso = escreva("%S")
console.log("Digite a sua altura")
var altura = escreva("%S")

var IMC=peso/(altura*altura)
console.log("Seu IMC É ",IMC.toFixed(2))

if (IMC>=18.5 && IMC<=25) {
    console.log("Você está no peso ideal")
} else {
    console.log("Você precisa de uma dieta urgente")
}