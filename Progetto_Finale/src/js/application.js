var $ = window.jQuery = require('jquery');
require('bootstrap');

$( document ).ready(function() {

  $('.cookie').cookieBar();

  secActive();

  playCarousel();

});

function secActive() {
  $('#filterType button').on('click', function(){
    $('#filterType button').removeClass('active');
    $('.row-vini article').fadeOut(); // nasconde tutti i vini
    $(this).addClass('active');
    var gruppo = $(this).attr('data-group');
    if(gruppo === 'all'){
      $('.row-vini article').fadeIn();
    }
    else{
      var matching = $('.row-vini article').filter(function(){
        return $(this).attr('data-group') == gruppo;
      });
      matching.fadeIn();
    }
  });
}

function playCarousel(){
  $('.carousel').carousel({
     interval: 3000,
     pause: false,
     ride: true
   });
}
