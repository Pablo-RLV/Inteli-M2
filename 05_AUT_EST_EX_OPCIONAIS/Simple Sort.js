// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split(' ');

// var num1 = parseInt(lines.shift()) 
// var num2 = parseInt(lines.shift()) 
// var num3 = parseInt(lines.shift()) 
var num1 = 7
var num2 = 21
var num3 = -14
var backupNum1 = num1
var backupNum2 = num2
var backupNum3 = num3
if(num3<num1){
    num3 = num1
    num1 = backupNum3
}
if(num2<num1){
    num2 = num1
    num1 = backupNum2
}
if(num3<num2){
    backup2Num3 = num3
    num3 = num2
    num2 = backup2Num3
}
console.log(num1)
console.log(num2)
console.log(num3)
console.log("")
console.log(backupNum1)
console.log(backupNum2)
console.log(backupNum3)