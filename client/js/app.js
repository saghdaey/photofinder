$(document).ready(function(){
  //submit event firing to server
  $('[name = submit]').on('click', function(){
    var email = $('[name = email]').val()
      $.ajax({
        method: "POST",
        url: "/api/fullcontact/visitors",
        data:{email: email}
      }).done(function(response){
        var photos=response.photos;
        console.log(photos);
        $.each(photos, function(index,photo){
          $('.photo-container').append('<img src="' + photo.url + '"' + '>');    
        })
      });
  })

});
