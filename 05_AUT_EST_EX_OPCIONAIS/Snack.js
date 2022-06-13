// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split(' ');

// var x = parseFloat(lines.shift())
// var y = parseFloat(lines.shift())

var x = 1
var y = 6
if(x == 1){
    z = 4.00
}
if(x == 2){
    z = 4.50
}
if(x == 3){
    z = 5.00
}
if(x == 4){
    z = 2.00
}
if(x == 5){
    z = 1.50
}

console.log("Total: R$ " + (z * y).toFixed(2))