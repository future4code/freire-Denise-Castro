//----------------Exercícios de Interpretação-----------------------------

//**************Questão 1******************

// a. undefined
// b. null
// c. 11
// d. 3
// e. 11 (3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13)
// f. 9

//**************Questão 2******************

//R:  SUBI NUM ONIBUS EM MARROCOS 26

//----------------- Exercícios de Escrita de Código-------------------------

//***************************Questão 1****************************************

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//Em seguida, Imprima no console a seguinte mensagem:
    
//O e-mail `emailDoUsuario` foi cadastrado com sucesso.
//Seja bem-vinda(o), `nomeDoUsuario`!

let nomeDoUsuario = prompt ("Digite seu nome:")
let emailDoUsuario = prompt ("Digite seu e-mail:")

console.log (`O email "${emailDoUsuario.trim()}", foi cadastrado com sucesso!
Seja bem vindo(a), ${nomeDoUsuario}!`)

//*****************************Questão 2***************************************
//
//Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//armazenado em uma variável. Em seguida, siga os passos:
    
    //a) Imprima no console o array completo
    
    //b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
    //seguida por cada uma das comidas, **uma embaixo da outra**.
    
    //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    //Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.


const comidasFavoritas = ["Vatapá", "Pastel", "Lasanha", "Açaí", "Feijoada"]
console.log(comidasFavoritas);

console.log(`Essas são as minhas comidas favoritas:
${comidasFavoritas[0]} 
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}
`);

let comidaDoUsuario = prompt ("Digite sua comida preferida")
comidasFavoritas[1] = comidaDoUsuario

console.log(`Essas são as nossas comidas favoritas:
${comidasFavoritas[0]} 
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}
`);

//**************************Questão 3**********************************
// Faça um programa, seguindo os passos:
    
    //a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    //c) Imprima o array no console
    
    //d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    //e) Remova da lista o item de índice que o usuário escolheu.
    
    //f) Imprima o array no console

const tarefaUm = prompt ("Digite a tarefa 0 do seu dia-a-dia:")
const tarefaDois = prompt ("Digite a tarefa 1 do seu dia-a-dia:")
const tarefaTres = prompt ("Digite a tarefa 2 do seu dia-a-dia")

const listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]
console.log(listaDeTarefas);

let tarefaRealizada = prompt ("Qual das tarefas você já realizou? 0, 1 ou 2?")
let i = tarefaRealizada
listaDeTarefas.splice(i, 1)
console.log ("Ainda faltam essas tarefas", listaDeTarefas)
















