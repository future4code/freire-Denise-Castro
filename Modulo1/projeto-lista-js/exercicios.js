// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  n1 = Number(prompt("Digite um numero"))
  n2 = Number(prompt("Digite outro numero"))
  const calculaAreaRetangulo = n1 * n2
  console.log (calculaAreaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Digite o ano atual:"))
  AnoNascimento = Number(prompt("Digite seu ano de nascimento:"))
  const imprimeIdade = anoAtual - AnoNascimento
  
  console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const calculaIMC = peso / (altura*altura)
return calculaIMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome:")
  idade = prompt("Quantos anos você tem?")
  email = prompt("Digite seu e-mail:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
corFav1 = prompt("Digite uma cor: ")
corFav2 = prompt("Digite outra cor: ")
corFav3 = prompt("Digite mais uma cor: ")
const coresFavoritas = [corFav1, corFav2, corFav3]
console.log (coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let nomeEmMaiusculas = string
  return  nomeEmMaiusculas.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let quantidade = custo / valorIngresso
  return quantidade

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  x = string1.length
  y = string2.length
  z = x==y
  return z

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const tamanhoArray = array.length
  const x = array[0]
  array[0] = array[tamanhoArray-1]
  array[tamanhoArray-1] = x
  
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let igualde = string1.toUpperCase() === string2.toUpperCase()
return igualde
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtualmente = Number(prompt("Digite o ano atual: "))
  let anoNasc = Number(prompt("Digite seu ano de nascimento"))
  let expedicaoRG = Number(prompt("Digite o ano de Expedição do seu RG:"))

  idadeDoUsuario =anoAtualmente - anoNasc
  idadeRG = anoAtualmente - expedicaoRG

  let caso01 = (idadeDoUsuario <= 20) && (idadeDoUsuario > 5)
  let caso02 = ((idadeDoUsuario >=20) || (idadeDoUsuario >=50)) && (idadeRG > 10)
  let caso03 = (idadeDoUsuario > 50) && (idadeRG > 15)

  const renovacao = caso01 || caso02 || caso03
  console.log (renovacao)
  /*Esse executa no console normalmente, mas na aba de exercício da errado,
  não sei por qual razão*/
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}