
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  document.body.style.backgroundColor= getRandomColor();
}

var idInterval = window.setInterval(changeColor,15000);

function start() {
  idInterval = window.setInterval(changeColor, 15000);
}

function stop() {
  clearInterval(idInterval);
}
