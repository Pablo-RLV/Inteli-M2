// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
var lines = ["-3.5", "-3.5", "11.0", "10.0", "8.0"]
var contador = 0
var qtd = 0
var soma = 0
var tamanho = lines.length
for(var i = 0; i < tamanho; i++){
    var num = parseFloat(lines.shift())
    if(num >= 0  && num <= 10){
        soma += num
        qtd += 1
        media = soma / qtd
    }
    else{
        contador += 1
        console.log("nota invalida")
        if(qtd >= 2){
            i = tamanho
            console.log("media = " + media)
        }
    }
}