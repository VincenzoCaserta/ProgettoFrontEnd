var $ = window.jQuery = require('jquery');
const Mustache = require('Mustache');
require('bootstrap');

$( document ).ready(function() {
  if($('body').is('.iMieiVini')){
    doAjax();
  }

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


function doAjax(){
  $.ajax({
    url: '/vini',
    method: 'GET',
    dataType: "json",
    success: function(result) {
      //  $.each(result, function(key, value) {
      var template = $('#template').html();
      //console.log(template);
      var rendered = Mustache.render(template, result);
      //console.log('il renderizzato:');
    //     console.log(rendered);
      $('#vini').html(rendered);
    },
    error: function(error){
      console.log("Errore insuccesso doAjax:");
      console.log(error);
    },
  });
};
