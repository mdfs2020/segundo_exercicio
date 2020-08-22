const input = require("readline-sync");

console.log('== Seu resultado, mina ==')

const nota1 = parseFloat (input.question ('Digite sua primeira nota: '))
const nota2 = parseFloat (input.question ('Digite sua segunda nota: '))
const nota3 = parseFloat (input.question ('Digite sua terceira nota: '))
const nota4 = parseFloat (input.question ('Digite sua quarta nota: '))
const nota5 = parseFloat (input.question ('Digite sua quinta nota: '))
const nota6 = parseFloat (input.question ('Digite sua sexta nota: '))

const media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6)/6
const resultado = media.toFixed(2)

if (resultado >= 7){
    console.log("Sua nota foi ".concat(resultado).concat(". Você foi Aprovada. Parabéns <3"))
} else if (resultado < 5){
    console.log("Sua nota foi ".concat(resultado).concat(". Você foi Reprovada. Sinto muito :("))
} else {
    console.log("Sua nota foi ".concat(resultado).concat(". Você está em recuperação. Foque nos estudos!"))
}
