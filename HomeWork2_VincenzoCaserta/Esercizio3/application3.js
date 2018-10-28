function add(){
  let num1 = Number(document.querySelector('#num1').value);
  let num2 = Number(document.querySelector('#num2').value);
  document.getElementById('sumRes').innerHTML = num1 + num2;
}

function subtraction(){
  let num1 = Number(document.querySelector('#num3').value);
  let num2 = Number(document.querySelector('#num4').value);
    document.getElementById('subRes').innerHTML = num1 - num2;
}

function mul(num1, num2) {
  var num1 = Number(document.querySelector('#num5').value);
  var num2 = Number(document.querySelector('#num6').value);
  document.getElementById('molRes').innerHTML = num1 * num2;
}

function div(num1, num2) {
  var num1 = Number(document.querySelector('#num7').value)
  var num2 = Number(document.querySelector('#num8').value)
    document.getElementById('divRes').innerHTML = num1 / num2;
}
