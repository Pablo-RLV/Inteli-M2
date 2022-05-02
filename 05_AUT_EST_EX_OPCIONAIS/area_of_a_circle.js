var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var R = parseFloat(lines.shift());
var A = 3.14159 * R * R 

console.log("A=" + A.toFixed(4))

