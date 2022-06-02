// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
var lines = [22, 2]

num1 = parseInt(lines.shift(0))
num2 = parseInt(lines.shift(1))

if(num2 > num1){
    resultado = num2 - num1 
}
else if(num2 == num1){
    resultado = 24
}
else{
    resultado = 24 - num1 + num2
}
console.log("O JOGO DUROU " + resultado + " HORA(S)")