function add(num1, num2){
  return num1 + num2;
}

function subtraction(num1, num2){
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1/num2;
}



document.getElementById("somma").innerHTML = add(4,3);
document.getElementById("sott").innerHTML = subtraction(4,3);
document.getElementById("molt").innerHTML = mul(4,3);
document.getElementById("div").innerHTML = div(4,3);
