// -------------------QUESTÕES DE INTERPRETAÇÃO----------------------------------

//1)

// 10, pois é a soma de 1 + 2 + 3 + 4.
//O código executa até um numero menor que 5 e acrescenta mais um número ao indice 

//2) os números da lista maiores que 18: 19, 21, 23, 25, 27, 30



// -------------------QUESTÕES DE ESCRITA DE ----------------------------------


let animaisDeEstimacao = Number(prompt("Quantos animais de estimação você tem?"))
let nomeDosAnimais = []
let c = 1
if (animaisDeEstimacao == 0) {
    console.log("Que pena! Você precisa adotar um bichinho")
}
while ( c <= animaisDeEstimacao) {
    nomeDosAnimais[c]= prompt("Qual o nome do seu pet?");
    c++
}

console.log (nomeDosAnimais)
*/


// 2

const arrayOriginal = [12, 26, 34, 45, 57]
posicoes = (arrayOriginal.length)
/*
function imprimeArray() {
   console.log (`
   ${arrayOriginal[0]}
   ${arrayOriginal[1]}
   ${arrayOriginal[2]}
   ${arrayOriginal[3]}
   ${arrayOriginal[4]}
   `) 
}


imprimeArray()

OU 

*/
//a)
function imprimeArray (){
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i]);
        
    }

}
imprimeArray(arrayOriginal)

//b)
function ArrayDivididoPorDez(array){
    for (let i = 0; i < array.length; i++) {
    console.log (array[i] / 10)
    }
}
ArrayDivididoPorDez(arrayOriginal)

//c)

function criarArray(array) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] %2 ===0){
            novoArray.push(array[i])}
    console.log(novoArray)
    }
}

criarArray(arrayOriginal)

//d)

function lerUmaString(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++){
        novoArray.push (`o elemento do index ${i} é: ${array[i]}`)
    }
    console.log(novoArray)
}
    lerUmaString(arrayOriginal)

//e) não sei alógica 
