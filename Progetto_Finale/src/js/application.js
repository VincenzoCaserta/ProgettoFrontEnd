var $ = window.jQuery = require('jquery');
require('bootstrap');

$( document ).ready(function() {

  secActive();

  hideCookie();

  playCarousel();

  $(document).on("click", "#filter", function() {
  $("li.filter").each( function() {
    if ($(this).attr("data-filter") !== ".fave") {
        $(this).css("display", "none");
    }
  });
});

    $("div[data-group='Bianco']")

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
  //  var gruppo = $(this).attr('data-group');
  //  console.log($("button[data-group="+gruppo+"]"));
  });
}

function hideCookie(){
  $('#hereCookie').on('click', () => {
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
