/*Referência de cores
    BgRed = "\x1b[41m"
    BgGreen = "\x1b[42m"
*/

/******************Exercício 1**********************
    
a) Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?

R: Usamos a propriedade process.argv[2] na posição 2 em diante


b)Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem*/

console.log("\x1b[42m","Olá", process.argv[2]+"!", "Você tem", process.argv[3], "anos.")

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

if (process.argv[2]=== undefined && process.argv[3]===undefined) {
    console.log(`\x1b[41m ERRO! Informe parâmetros`)
}
else if (process.argv[3]=== undefined){
    console.log("\x1b[41m ERRO! Esperava 2 argumentos, só recebi 1.")
}
else
{
console.log (`\x1b[42m Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Daqui a 7 anos você terá ${Number(process.argv[3])+7}`)
}



