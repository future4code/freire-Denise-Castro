
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

/*const login = () => {
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
let vacinaTomada = prompt("Digite qual vacina você tomou: CoronaVac, Astrazênica ou Pfizer.").toUpperCase()
let tempo = 0

switch (vacinaTomada) {
    case "CORONAVAC":
        tempo = 28
        break;
    case "ASTRAZÊNICA":
        tempo = 90
    case "PFIZER":
        tempo = 90   
    default:
        tempo
        break;
}
if (vacinaTomada == "CORONAVAC") {
    data = "18/06/2022"
} else {
    data = "22/09/2022"
}

return `Olá ${nomeDoUsuario2}, a próxima data da vacina ${vacinaTomada}, é daqui a ${tempo} dias.
Compareça no posto na data ${data}.`
}
console.log(primeiraDose())

*/
// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
/*- Exercício 6 - Loop+Condicional -**Segunda dose**
    
    Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário
     e mude o valor da propriedade `imunização` para **“completa”** para isso vamos te fornecer
      uma lista de usuários.
    
    ```jsx
    const usuarios = [
           { nome: "Artur", imunizacao: "incompleta" },
           { nome: "Barbara", imunizacao: "incompleta" },
           { nome: "Carlos", imunizacao: "incompleta" }
    ]
    ```
    
    💡Dica:  para acessar os valores guardados em cada propriedade de um objeto use a notação do ponto chamando pelo nome da propriedade.
     **Ex:**  
    
    - objeto.nome // "Bárbara"
    - objeto.imunizacao // "incompleta"*/

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

/*
- Exercício 7 -  Loop+Condicional - **Aviso aos atrasados**
    
    As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda
     dose e temos que enviar uma mensagem para elas no app.
    Escreva uma função que **leia a lista de usuários** e **verifique** se a imunização 
    está completa ou não e caso não esteja completa,  **imprima no console** 
    uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.
*/

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        
    }
        if (usuarios[index]["imunizacao"]== "incompleto"){
        console.log (`Olá, ${nome}, sua imunização está ${imunizacao}, favor, comparecer ao posto`)
        }
    }
    

avisoAosAtrasados()


// DESAFIO------------------------------------------------------------------------------------------
/*Modifique as funções dos exercícios 3 a 7 para que salvem as informações coletadas 
em um único objeto “usuários” e usem este objeto para exibir as mensagens e fazer as validações pedidas .

Para isso será usado o array de objetos - usuarios abaixo:*/

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


/*No desafio, ao invés de cadastrar o usuário enviando para o array, você vai adicionar 
as informações recebidas pelo prompt a um objeto e então adicioná-lo ao array usuarios.
console.log(cadastroDesafio());*/

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

/*Neste exercício você deve adicionar ao usuário cadastrado
 da lista usuarios as informações vacina e imunização. 
 O parâmetro imunização deve receber um valor padrão "incompleta" 
 além de devolver a mensagem anteriormente programada. */
 
const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())

/*Neste exercício você deve receber um nome de usuário por parâmetro, verificar se este
 nome existe na lista usuarios e  caso exista mudar o valor do parâmetro imunização para "completa"*/

const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

/*_________________________________________________________________

Reformule a função para que ela **retorne** a mesma mensagem ao final,
 adicionando qual das vacinas o usuário deve fazer o reforço.

Imprima a mensagem no console.
*/

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());