var $ = window.jQuery = require('jquery');
require('bootstrap');

$( document ).ready(function() {

  $('#hereCookie').on('click', () => {
    $('.cookie').fadeOut();
  });

  $('#carouselFade').carousel({
     interval: 3000,
     pause: false
   });
});
