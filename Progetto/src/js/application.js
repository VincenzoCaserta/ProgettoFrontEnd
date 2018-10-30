var $ = window.jQuery = require('jquery');
const Mustache = require('Mustache');
var bootstrap = require('bootstrap');
const sli = require('slick-carousel');



$( document ).ready(function() {


  $('#hereCookie').on('click', () => {
    $('.cookie').fadeOut();
  });
  doAjax();


});

function setLike(self){
  //console.log('Log prima della chiamata:' + self.attr('data-like'));
  $.ajax({
    url: '/articles',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ id: self.attr('id'), like: self.attr('data-like') }),
    success: function(result){
    //console.log('Log dopo della chiamata:' + result);
    if(result === 'ok'){
      self.toggleClass("btn-success")
      self.attr('data-like', result);
    }
      //  console.log('valore di data-like:' + self.attr('data-like'));

    },
    error: function(error){
      console.log("Errore insuccesso setLike:");
      console.log(error);
    }
  });
}


function doAjax(){
  $.ajax({
    url: '/articles',
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
      console.log("Errore insuccesso doAjax:");
      console.log(error);
    },
    complete: function() {
    $('article .btn, .btn-default').on('click', function() {
        //$(this).toggleClass("btn-success");
      //  const idB = event.currentTarget.getAttribute("id");
        //const self = $(this)
      /*  var boolean;

      //  if($(event.currentTarget).hasClass('btn-success')){
      //    boolean = true;
    //    }
        else{
          boolean = false;
        }
        */
        setLike($(this));
      });
    }
  });
};
