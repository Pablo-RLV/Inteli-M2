//comentário kasdkaskd

function ex1(){
    //criando uma mensagem de aviso
    //alert('Fala galerinha', 'Seu tempo de subida foi' + tSubida + 's');
    
    //pegar valor do form 
    var v0 = document.getElementById('v0').value;
    const g = 10; //aceleração gravitacional
    
    var tSubida = v0/g;
    
    var hMax = Math.pow(v0,2) / (g * 2); 
    
    document.getElementById('vem').innerHTML = "tempo de subida = " + tSubida;
    document.getElementById('vem1').innerHTML = "altura máxima = " + hMax;
    //print no console 
    console.log("tempo de subida = " + tSubida);
    
    //print no alert, só pode ter um modal por página
    //alert("tempo de subida = " + tSubida);
    
    }