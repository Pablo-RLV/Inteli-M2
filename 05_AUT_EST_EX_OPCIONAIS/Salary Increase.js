// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
var input = 400.00
var salario = parseFloat(input).toFixed(2) 
if(salario <= 400){
    salarioNovo = salario * 1.15
    valorAumentado = salarioNovo - salario
    percentual = 15
}
else if(salario > 400 && salario <= 800){
    salarioNovo = salario * 1.12
    valorAumentado = salarioNovo - salario
    percentual = 12
}
else if(salario > 800 && salario <= 1200){
    salarioNovo = salario * 1.10
    valorAumentado = salarioNovo - salario
    percentual = 10
}
else if(salario > 1200 && salario <= 2000){
    salarioNovo = salario * 1.07
    valorAumentado = salarioNovo - salario
    percentual = 7
}
else{
    salarioNovo = salario * 1.04
    valorAumentado = salarioNovo - salario
    percentual = 4
}
console.log("Novo salario: " + salarioNovo.toFixed(2) )
console.log("Reajuste ganho: " + valorAumentado.toFixed(2) )
console.log("Em percentual: " + percentual + " %")
