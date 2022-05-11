// a = false porque bool1 é verdade e bool2 é falso, true && false = false
// b = false porque a lógica é a mesma da letra a
// c = true, poruqe dentro do parêntese tem uma condição verdadeira e uma falsa com o operador OU representadopor ||
// no OU só precisa que uma condição seja verdadeira para retornar verdadeiro, o resultado é diferente de falso
// logo true && true = true


// Questão 2

// O Console não somou os valores
// Mas concatenou os valores digitados
// Esse resultado aconteceu porque os dados vieram de um formulário HTML
// em razão disso, a variável soma é uma string.


//Questão 3
// Usar Number antes da pergunta
// Ou Converter string em Number



// Questões de Escrita
//Questão 1
//a) Pergunte a idade do usuário

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

let nomeDoUsuario = Number (prompt ("Qual é o seu nome?"))
let idadeDoUsuario = prompt ("Qual é a sua idade?")
let idadeDoAmigo = Number (prompt ("Qual é a idade do seu melhor amigo?"))

const maiorIdade = idadeDoUsuario > idadeDoAmigo
console.log("Sua idade é maior do que a do seu melhor amigo? ", maiorIdade);
console.log ("A diferença de idade entre vocês é ", (idadeDoUsuario - idadeDoAmigo), "anos")

console.log("--------------------------------------------");

//Peça ao usuário que insira um número **par**

//Imprima na console **o resto da divisão** desse número por 2.

//Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código


let numeroPar = Number (prompt("Insira um número Par:"))
const restoDaDivisao = numeroPar % 2
console.log("Resto da divisão: ", restoDaDivisao);

// Todo número ímpar, quando dividido por 2, deixa resto igual a 1.
// Os números pares, quando divididos por 2, deixam resto 0

console.log("--------------------------------------------");

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
   // a) A idade do usuário em meses
    
   // b) A idade do usuário em dias
    
    //c) A idade do usuário em horas


let idadeDaPessoa = Number (prompt("Qual é a sua idade?"))
let idadeEmMeses = idadeDaPessoa * 12
let idadeEmDias = idadeDaPessoa * 365
let idadeEmHoras = idadeDaPessoa *  8760

console.log("Sua idade em meses é: ", idadeEmMeses);
console.log("Sua idade em dias é: ", idadeEmDias);
console.log("Sua idade em horas é: ", idadeEmHoras);


console.log("--------------------------------------------");

//Faça um programa que pergunte ao usuário dois números. Em seguida, 
//faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
//O primeiro numero é maior que segundo?
// O primeiro numero é igual ao segundo?
//O primeiro numero é divisível pelo segundo?
//O segundo numero é divisível pelo primeiro?

let primeiroNumero = Number (prompt("Digite um número:"))
let segundoNumero = Number (prompt("Digite mais um número:"))
let restoNumeros = primeiroNumero % segundoNumero

const maiorNumero = primeiroNumero > segundoNumero
const igualdade = primeiroNumero === segundoNumero
const divisível = restoNumeros === 0
const divisívelSegundo = restoNumeros !== 0

console.log("O primiro número é maior que o segundo? ", maiorNumero);
console.log("O primeiro número é igual ao segundo? ", igualdade);
console.log("O primeiro número é divisível pelo segundo? ", divisível);
console.log("O segundo número é divisível pelo primeiro? ", divisívelSegundo);
