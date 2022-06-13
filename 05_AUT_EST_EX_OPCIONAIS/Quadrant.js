// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
var lines = ["1 2", "1 5", "-1 2", "0, 1"]
var loop = 1
for(i in lines){
    while(loop == 1){
        var dupla = lines.split(" ")
        var x = parseInt(dupla.shift())
        var y = parseInt(dupla.shift())
        if(x != 0 || y != 0){
            if (x > 0 && y > 0){
                console.log("primeiro")
            }
            else if (x > 0 && y < 0){
                console.log("quarto")
            }
            else if (x < 0 && y > 0){
                console.log("terceiro")
            }
            else{
                console.log("segundo")
            }
        }   
        else{
            loop = 0
        }
    }
}