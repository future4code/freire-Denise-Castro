/*O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:*/
/*
[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]
*/
/*Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. */

enum Setor{
    MARKETING = "marketing",
    FINANCEIRO = "financeiro",
    VENDAS = "vendas"

}

type Pessoa = {
    nome: string,
    salario: number,
    setor: string,
    presencial: boolean
}

const colaboradoresDaEmpresa: Pessoa[] = [
    { nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }

]

const filterColaboradores = (colaboradoresDaEmpresa: Pessoa[]):Pessoa[] => {
    return colaboradoresDaEmpresa.filter((colaboradoresDaEmpresa:Pessoa):boolean=>{
        return colaboradoresDaEmpresa.presencial && colaboradoresDaEmpresa.setor===Setor.MARKETING
    })

}

console.table(filterColaboradores(colaboradoresDaEmpresa))