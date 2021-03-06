const $ = require('jquery');
const Mustache = require('Mustache');

$( document ).ready(function() {

  $('#hereCookie').on('click', () => {
    $('.cookie').fadeOut();
  });

  doAjax();
});

$( document ).ajaxComplete(function() {
  $('article .btn, .btn-default').on('click', event => {
      $(event.currentTarget).toggleClass("btn-success");
  });
})

function doAjax(){
  $.ajax({
    url: 'ajax-article.json',
    method: 'GET',
    dataType: "json",
    success: function(result) {
      //  $.each(result, function(key, value) {
      var template = $('#template').html();
      //console.log(template);
      var rendered = Mustache.render(template, result);
      //console.log('il renderizzato:');
      //    console.log(rendered);
      $('#articolo').html(rendered);
    },
    error: function(error){
      console.log("Errore insuccesso chiamata:");
      console.log(error);
    }
  });
};
