// Questões Interpretação de código
// Questão 1

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// primeiramente será impresso o valor de b 10
// depois será impresso o valor de a 10, seguido pelo valor atualizado de b 5

// Questão 2

let y = 10
let z = 20
c = y
z = c
y = z

console.log(y, z, c)

// será impresso 10 10 10
// o valor de a é 10, o valor de b recebe o valor de c que recebeu o valor de a também.

// Questão 3

let p = prompt ("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// o código perguntará quantas horas trabalhadas por dia em seguida o quanto é recebido
// em seguida o sistema dividirá o valor recebido pelas horas trabalhadas.

// Questões escritas de Código
// Questão 01

nome =
typeof nome
idade =
typeof idade
// o código retornou undefined porque ainda não foi atibuido valor à variável declarada

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual a sua idade")
console.log (typeof nome)
console.log (typeof idade)
// foi impresso que as entradas são do tipo string, embora a idade seja number (não entendi o porquê)
console.log ("Olá", nome, "você tem", idade, "anos")

// Questão 02

let conta = prompt ("você tem conta no banco?(responda SIM ou NÃO)")
let pizza = prompt ("Você gosta de pizza? (Responda SIM ou NÃO)")
let animal = prompt ("Você gosta de gatos? (Responda SIM ou NÃO")

let respostaConta = conta
let respostaPizza = pizza
let respostaAnimal = animal

console.log ("Você tem conta no banco:"  + respostaConta)
console.log ("Você gosta de pizza:"  + respostaPizza)
console.log ("Você gosta de gatos:"  + respostaAnimal)

// Questão 03

let m = 10
let n = 25
let o = m
m = n
n = o

console.log ("o novo valor de m é:", m)
console.log ("o novo valor de n é:", n)










