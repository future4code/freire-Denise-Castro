
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(1, 3));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {
    return `No comprador ${a} > ${b} é ${a>b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=
// b-) 1=='1'=
// c-) 'a'==='b'=
// d-) 'b'>'a'=
// e-) 0!==null=


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
/*
const cadastro = () => {

    let usuario = []
    
    let anoDeNascimento = Number(prompt("Digite seu ano de nascimento:"))
    
        if ((2022 - anoDeNascimento) <=17){
        alert ("Sua idade é inferior à 18 anos, você não pode se cadastrar!")
    }else{
        let nomeDoUsuario = prompt("Digite seu nome completo")
        let senhaDoUsuario = prompt("Digite sua senha:")
        while (senhaDoUsuario.length < 6) {
            alert ("Sua senha precisa ter no mínimo 6")
            senhaDoUsuario = prompt ("Digite sua senha:")
        }
        let nacionalidade = prompt("Digite sua nacionalidade:").toLowerCase()
        if ((nacionalidade != "brasileiro") && (nacionalidade != "brasileira")){
            alert ("Você não pode se cadastrar")
        }
        usuario = [nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade]
        return usuario
    }

}
console.log(cadastro());
*/
// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    let senhaDoUsuario = prompt("Digite sua senha:")
    if (senhaDoUsuario === login) {
        console.log("Usuário logado")
    } else {
        console.log("Senha incorreta!")
    }

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    //  Sua lógica aqui
let nomeDoUsuario2 = prompt("Digite seu nome: ")
let vacinaTomada = 


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());