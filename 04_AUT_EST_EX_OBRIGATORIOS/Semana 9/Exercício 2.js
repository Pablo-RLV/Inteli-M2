function calcular(){
  var num = document.getElementById('num').value
  var soma = 0
  for(i in num){
    algorismo = num.charAt(i)
    soma += Number(algorismo)
  }
  document.getElementById("resultado").innerHTML = soma
}