//1)

//a) Ler um número e verifica se o resto dele é equivalente a zero.
//b) números pares passam no teste
//c) números ímpares não passam no teste.

//2)

//a) pede pra o usuário digitar um número e já converte para o tipo primitivo Number
//b) Digitando 10 ele passa no teste porque é maior que zero, digitando -10 o número não passa, pois não há
// outra condição
// c) Dá erro, a variável mensagem está dentro da condição If, não podde ser acessada. 

//3)


// o programa pergunta o nome da fruta e imprime e nome digitado pelo usuário e seu respectivo preço.
//b) O preço da maça é R$ 2.25
//c) o preço da pêra é R$ 5.5, mas sem o break ele pula para o próximo preço: 5.



//Escrita de código

// Questão 01

let idadeDoUsuario = Number(prompt("Qual a sua idade?"))
let idade = idadeDoUsuario

function idadeParaDirigir (idade) {
    if (idade>=18){
        console.log("Parabéns, você já pode dirigir")
    }else{
        console.log ("Você ainda não tem idade suficiente para dirigir")
    }
}

idadeParaDirigir(idadeDoUsuario)

// Questão 02

let turnoDoUsuario = prompt("Qual o seu turno? Digite M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()

function saudacao (turnoDoUsuario) {
    if (turnoDoUsuario === "M"){
        console.log("Bom dia, usuário(a)!")
    } else if (turnoDoUsuario === "V"){
        console.log ("Boa tarde, usuário(a)!")
    }else{
        console.log ("Boa noite, usuário(a)!")
    }
}

saudacao(turnoDoUsuario)

// Questão 03

switch (turnoDoUsuario) {
    case "M":
        console.log("Bom dia, usuário(a)!")
        break;
    case "V":
        console.log ("Boa tarde, usuário(a)!")
        break
    case "N":
        console.log("Boa noite, usuário(a)!")
    default:
        console.log("Não é um turno válido. Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
        break;
}

// Questão 04

let generoDeFilme = prompt("Qual gênero vai assistir?").toLowerCase()
let precoDoIngresso = Number(prompt("Qual o valor do ingresso?"))

function assistir (filme, ingresso) {
    if (filme === "fantasia" && ingresso < 15) {
        console.log("Bom fime!")
    } else {
        console.log("escolha outro filme!")
    }
}

assistir (generoDeFilme, precoDoIngresso)

/*- Desafio
    1. Modifique o código do exercício 4 de escrita de código para,
    antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário,
    pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)
    e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`,
    trocando [LANCHINHO] pelo que o usuário colocou no input.*/

let generoDeFilme2 = prompt("Qual gênero vai assistir?").toLowerCase()
let precoDoIngresso2 = Number(prompt("Qual o valor do ingresso?"))
let lanche =prompt ("Qual lanche você quer comprar?")


function assistir2 (filme, ingresso, lanche) {
    if (filme === "fantasia" && ingresso < 15) {
        console.log(`Bom filme! Aproveite seu(a) ${lanche}!`)
    } else {
        console.log("escolha outro filme!")
    }
}

assistir2 (generoDeFilme2, precoDoIngresso2, lanche)
