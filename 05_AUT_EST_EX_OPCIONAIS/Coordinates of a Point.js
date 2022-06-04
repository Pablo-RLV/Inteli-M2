var lines = [4.5,-2.2]

var x = parseFloat(lines.shift())
var y = parseFloat(lines.shift())

if(x != 0 || y != 0){
    if(x != 0 && y != 0){
        if (x > 0 && y > 0){
            console.log("Q1")
        }
        else if (x > 0 && y < 0){
            console.log("Q4")
        }
        else if (x < 0 && y > 0){
            console.log("Q2")
        }
        else{
            console.log("Q3")
        }
    }   
    else{
        if (x == 0){
            console.log("Eixo Y")
        }
        else{
            console.log("Eixo X")
        }
    }
}
else{
    console.log("Origem")
}