var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var A = parseFloat(lines.shift()) * 3.5;
var B = parseFloat(lines.shift()) * 7.5;
var X = (A + B)/11;
console.log("MEDIA = " + X.toFixed(5));