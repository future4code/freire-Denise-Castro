// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayNumerosPares = []
  for (let i =0; i < array.length; i++){
    if (array[i] % 2 === 0) {
      arrayNumerosPares.push(array[i])
    }
  }
  return arrayNumerosPares
}
retornaNumerosPares()

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const listaDeNumerosPares = array.filter((num)=>{
    if (num % 2 ===0){
      return num
    }
  })
  return listaDeNumerosPares.map((par) => Math.pow(par,2));
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrayPar = []
  for (let index = 0; index < n; index++) {
    arrayPar[index] = index * 2
    
  }
   return arrayPar
}

// EXERCÍCIO  09               
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB === ladoC)) {
        return "Equilátero"
    }else if ((ladoA!== ladoB) && (ladoA !==ladoC) && (ladoB !== ladoC)) {
        return "Escaleno"

} else {
        return "Isósceles"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((pessoa)=>{
    return pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60
  })
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((pessoa)=>{
    return pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  return contas.map((cliente)=>{
    cliente.compras.map ((compra)=>{
      cliente.saldoTotal = cliente.saldoTotal - compra
    })

    cliente.compras = []

    return cliente
  })
}
retornaContasComSaldoAtualizado()
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const ordemAlfabetica = consultas.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1
      
    }else if (a.nome < b.nome) {
      return -1;
    }else{
      return 0;
    }
  })
  return ordemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}