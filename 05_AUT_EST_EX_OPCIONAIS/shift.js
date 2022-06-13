
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');


// var lines = input.split('\n');
var lines = ["1 2","-1 5","1 2","0 1", "1 2","-1 5","1 2","0 1"]
var tamanho = lines.length
for(var i = 0; i < tamanho; i++){
        lines1 = lines.shift()
        dupla = lines1.split(" ")
        var x = parseInt(dupla.shift())
        var y = parseInt(dupla.shift())
        if(x != 0 && y != 0){
            if (x > 0 && y > 0){
                console.log("primeiro")
            }
            else if (x > 0 && y < 0){
                console.log("quarto")
            }
            else if (x < 0 && y > 0){
                console.log("segundo")
            }
            else{
                console.log("terceiro")
            }
        }   
        else{
            i = tamanho
        }
}