var $ = window.jQuery = require('jquery');
require('bootstrap');

$( document ).ready(function() {

  console.log($('.cookie').attr('data-visible'));
  if(!$('.cookie').attr('data-visible')){
    console.log('nell if');
    $('.cookie').hide();
  }

  secActive();

  hideCookie();

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

function hideCookie(){
  $('#b-cookie').on('click', () => {
    $('.cookie').attr('data-visible', false);
    console.log($('.cookie'));
    $('.cookie').fadeOut();
  });
}

function playCarousel(){
  $('.carousel').carousel({
     interval: 3000,
     pause: false,
     ride: true
   });
}
