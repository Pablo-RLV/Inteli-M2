function bubbleSort(){
    var str = document.getElementById("numeros").value
    var foco = parseInt(document.getElementById("foco").value)
    str = str.split(",").slice()
    var array = str.map(Number)
    var new_array = []
    while( typeof (i = array.shift()) !== 'undefined' ) {
    parseInt(i)
    new_array.unshift(i)
    }
    var length = new_array.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(new_array[j] > new_array[j+1]) {
                           var tmp = new_array[j]; 
                new_array[j] = new_array[j+1]; 
                new_array[j+1] = tmp; 
            }
        }        
    }

    var valorFocal = 1 + new_array.indexOf(foco)
    console.log(valorFocal)
    if (valorFocal != 0){
        document.getElementById('valorFocal').innerHTML = "Números organizados: " + new_array;
    }
    else{
        document.getElementById('valorFocal').innerHTML = "Valor focal não encontrado"
    }
    document.getElementById('saida').innerHTML = "Posição do valor focal: " + valorFocal;
}
