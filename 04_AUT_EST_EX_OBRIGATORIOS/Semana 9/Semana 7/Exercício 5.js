function calcular(){
    var n1 = document.getElementById("num1").value
    var n2 = document.getElementById("num2").value
    var lista_primos = []

    for(var i = n1; i <= n2; i++){
        var num_divisores = 0
        for(var possiveis_divisores = 0; possiveis_divisores <= n2; possiveis_divisores++){
            if(i % possiveis_divisores == 0){
                num_divisores += 1
            }
        }
        if(num_divisores == 2){
            lista_primos.push(i)
        }
    }
    document.getElementById("resultado").innerHTML = lista_primos
}