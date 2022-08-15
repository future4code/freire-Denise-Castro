/*Exercício 2
    
Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.*/

const tipoDaVariavel = (variavel: any): any=>{
    console.log(variavel)
    return typeof variavel

}

console.log(tipoDaVariavel("Hello, AstroDev!"))
console.log(tipoDaVariavel(29))
console.log(tipoDaVariavel(true))
console.log(tipoDaVariavel(["Br", "Muri", "Chijo", "Fernanda"]))
console.log(tipoDaVariavel({nome: "Denise", idade: 29}))
console.log(tipoDaVariavel(undefined))