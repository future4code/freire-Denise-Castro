let operacao = process.argv[2];
let primeiroNumero = process.argv[3];
let segundoNumero = process.argv[4];


if (process.argv[3] === undefined || process.argv[4]===undefined) {
    console.log("\x1b[41m Erro! Informe 2 números")
}


switch (operacao) {
    case "add":
        resultado = (Number(primeiroNumero) + Number(segundoNumero))
        break;

    case "sub":
    resultado = (Number(primeiroNumero) - Number(segundoNumero))
    break;

    case "div":
        resultado = (Number(primeiroNumero) / Number(segundoNumero))
        break;

    case "mult":
        resultado = (Number(primeiroNumero) * Number(segundoNumero))
        break;

    default: console.log("\x1b[31m Por favor usar add, sub, mult ou div");

}


console.log(`\x1b[42m A resposta é: ${resultado}`)
