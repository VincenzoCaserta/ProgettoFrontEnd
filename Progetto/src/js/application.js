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
      $.each(result, function(key, value) {
        $('#provaAjax').append("<p>" + value.text+ "<p>");
      })
    //  for (var i = 0; i < result.length; i++) {
    //    $('#provaAjax').append("<p>" + result[i].text + "<p>");
    //  }
    },
    error: function(error){
      console.log("Error:");
      console.log(error);
    }
  });
};
