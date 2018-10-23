function changeColor (id) {
  var x = document.getElementById(id);

  if (x.style.backgroundColor === 'rgb(0, 255, 0)') {
    x.style.backgroundColor = 'rgb(255, 255, 255)';
  } else {
    x.style.backgroundColor = 'rgb(0, 255, 0)';
  }
}

document.getElementById('like1').addEventListener('click', function () {
  changeColor('like1');
});

document.getElementById('like2').addEventListener('click', function () {
  changeColor('like2');
});

document.getElementById('like3').addEventListener('click', function () {
  changeColor('like3');
});

document.getElementById('like4').addEventListener('click', function () {
  changeColor('like4');
});

function hideCookie () {
  document.getElementById('cookie').style.display = 'none';
};

document.getElementById('hereCookie').addEventListener('click', function () {
  hideCookie();
});
