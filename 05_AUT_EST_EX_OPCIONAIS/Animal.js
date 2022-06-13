var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var vertebra = lines.shift()
var subclasse = lines.shift()
var alimentacao = lines.shift()

if(vertebra == "vertebrado"){
    if(subclasse == "ave"){
        if(alimentacao == "carnivoro"){
            console.log("aguia")
        }
        else{
            console.log("pomba")
        }
    }
    else{
        if(alimentacao == "onivoro"){
            console.log("homem")
        }
        else{
            console.log("vaca")
        }
    }
}
else{
    if(subclasse == "inseto"){
        if(alimentacao == "hematofago"){
            console.log("pulga")
        }
        else{
            console.log("lagarta")
        }
    }
    else{
        if(alimentacao == "hematofago"){
            console.log("sanguessuga")
        }
        else{
            console.log("minhoca")
        }
    }
}