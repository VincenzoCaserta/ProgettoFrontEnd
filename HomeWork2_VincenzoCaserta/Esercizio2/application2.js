function myFun(){

  var myArray = new Array();
  var i = 1
  for(; i <= 15; i++){
    myArray[i-1] = i*i ;
  }
  myArray[myArray.length] = "<br>Fine Elaborazione"
  return myArray;
}
document.getElementById("array").innerHTML = myFun();
