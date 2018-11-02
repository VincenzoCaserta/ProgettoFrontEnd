$( document ).ready(function() {
  doAjax();

});

function doAjax(){
  $.ajax({
    url: '/vini',
    method: 'GET',
    dataType: "json",
    success: function(result) {
      //  $.each(result, function(key, value) {
      var template = $('#template').html();
      console.log(template);
      var rendered = Mustache.render(template, result);
      console.log('il renderizzato:');
         console.log(rendered);
      $('#vini').html(rendered);
    },
    error: function(error){
      console.log("Errore insuccesso doAjax:");
      console.log(error);
    },
  });
};
