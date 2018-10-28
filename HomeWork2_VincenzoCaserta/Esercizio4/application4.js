function myFun(){
  var n = Number(document.querySelector('#num').value)
  var myArray = new Array();
  for(var i = 1; i <= n; i++){
    myArray[i-1] = i*i ;
  }
  myArray[myArray.length] = "<br>Fine Elaborazione"
  document.getElementById('res').innerHTML = myArray;
}
