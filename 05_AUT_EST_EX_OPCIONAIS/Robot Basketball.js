var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var distancia = input
var pontos = 0
if(distancia >= 0 && distancia <= 800){
    pontos = 1
}
else if(distancia > 800 && distancia <= 1400){
    pontos = 2
}
else{
    pontos = 3
}
console.log(pontos)