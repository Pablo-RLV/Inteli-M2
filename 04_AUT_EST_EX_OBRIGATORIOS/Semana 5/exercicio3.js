function bubbleSort(){
    var str = document.getElementById("numeros").value
    str = str.split(",").slice()
    var array = str.map(Number)
    array.sort()
    
    console.log(array)
    document.getElementById('saida').innerHTML = array;
}