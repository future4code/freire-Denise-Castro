// --------------------------Exercício de Interpretação----------------------------

//1)
//2) 1 Array com o mesmo tamanho do original contendo em cada índice o elemento nome.
//3)

// ---------------------------Exercício de Escrita----------------------------------
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)

const nomeDosDoguinhos = pets.map((item)=>{
    return item.nome
})
console.log (nomeDosDoguinhos)

//b)
const tiposSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"

}) 
console.log (tiposSalsicha)

//c)
const cupomDeDesconto = pets.filter((item) => {
    return item.raca === "Poodle"
})
const cupomPet = cupomDeDesconto.map((item) =>{
    return (`você ganhou 10% de desconto para tosar o ${item.nome}!`)
})
console.log(cupomPet)

//2) 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeDosProdutos = produtos.map((item) => {
    return item.nome
 })
console.log(nomeDosProdutos)
//b)
const precoComDesconto = produtos.map((item) => {
    return item.nome + " de " + item.preco + " por R$ " + (item.preco * 0.95)
})
console.log(precoComDesconto)

//c) 

const categoriaBebidas= produtos.filter((item) => {
    return item.categoria === "Bebidas"

}) 
console.log (categoriaBebidas)

