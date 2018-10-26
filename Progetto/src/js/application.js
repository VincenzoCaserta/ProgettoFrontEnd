const $ = require('jquery');

$( document ).ready(function() {
    doAjax();
});

// Nascondi Cookie
$('#hereCookie').on('click', () => {
  $('.cookie').hide();
});

//  Cambia la classe allo span
 $('.btn, .btn-default').on('click', event => {
    $(event.currentTarget).toggleClass("btn-success");
});

function doAjax(){
  $.ajax({
    url: 'ajax-data.json',
    method: 'GET',
    dataType: "json",
    success: function(result) {
      for (var i = 0; i < result.length; i++) {
        $('#provaAjax').append("<p>" + result[i].text + "<p>");
      }
    },
    error: function(error){
      console.log("Error:");
      console.log(error);
    }
  });
};

  //  Cambia la classe allo span
  /*
  $('.span-like').on('click', event => {
     $(event.currentTarget).toggleClass("green-like");
   })
  */

 /*
 $("#like1").on('click',function (){
   $("#like1").toggleClass("green-like");
 });

 $("#like2").on('click',function (){
   $("#like2").toggleClass("green-like");
 });

 $("#like3").on('click',function (){
   $("#like3").toggleClass("green-like");
 });

 $("#like4").on('click',function (){
   $("#like4").toggleClass("green-like");
 });
 */
/*
function hideCookie () {
  document.getElementById('cookie').style.display = 'none';
};

document.getElementById('hereCookie').addEventListener('click', function () {
  hideCookie();
});
*/
/*
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

*/
