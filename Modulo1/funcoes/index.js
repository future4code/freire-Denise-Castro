//------------------------------EXERCÍCIO DE INTERPRETAÇÃO---------------------------

//*********************QUESTÃO 01******************************

// a) Será impresso:  10 no primeiro console.log e 50 nosegundo console.log

// b) não seria impresso nada


//*********************QUESTÃO 02******************************
// a) código pede para o usuário digitar uma frase, em seguida
//    converte o texto em letras minúsculas, depois usando o método includes()
//    determina se a palavra "cenoura" pode ser encontrado dentro da string que
// o usuário digitou, sem sim retorna true, caso contrário retorna false.

// b) as três frases contém a palvra "cenoura", todas as saídas serão true.



//---------------------------------EXERCÍCIO DE ESCRITA ------------------------------

//*********************QUESTÃO 01******************************

// a) A função não deve receber nenhum parâmetro e deve imprimir 
//    uma mensagem falando algumas informações sobre você.

//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//   o nome (string), a idade (number), a cidade (string) e uma profissão (string).
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

function apresentacao() {
   
   return `Meu nome é Denise, tenho 28 anos, moro em Santarém e sou estudante`
}
const frase = apresentacao
console.log(frase())

function apresentacaoNova() {
    let nome = "Erilda"
    let idade = 25
    let cidade = "Natal" 
    let profissao = "Biologa"
return `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`

}
const fraseApresentacao = apresentacaoNova
console.log (fraseApresentacao())

//*********************QUESTÃO 02******************************


//Escreva as funções explicadas abaixo:
//Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima 
//no console o resultado.
//
//Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
//é **maior ou igual** ao segundo.
//Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não


function soma (numero1, numero2) {
    let resultado = numero1 + numero2 
    return resultado
}
console.log (soma(12, 5))

function maiorOuIgual (n, m) {
    let resposta = n >= m
    return resposta
}

console.log ("O primeiro número é maior ou igual ao segundo? " + maiorOuIgual(8, 4))

function parOunao (x) {
    const valor = x % 2
    let resultpar = valor === 0
    return resultpar
}

console.log ("Esse é um número par? " + parOunao(10))

//*********************QUESTÃO 03******************************

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
//pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

let primeiro = Number(prompt ("Digite um número:"))
let segundo = Number (prompt("Digite outro número"))
console.log (`números insedidos: ${primeiro} e ${segundo}`)


function soma1 () {
    return primeiro + segundo
}
const respostaSoma = soma1
console.log ("Soma: " + respostaSoma())

function subtração () {
    return primeiro - segundo
}
const diferenca = subtração
console.log ("Diferença: " + diferenca())

function multiplicacao () {
    return primeiro * segundo
}
const resultmultiplicacao = multiplicacao
console.log ("multiplicação: " + resultmultiplicacao())

function divisao () {
    return primeiro / segundo
}
const resultDivisao = divisao
console.log ("Divisão " + resultDivisao())

















