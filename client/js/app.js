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
        if(photos.length<2){
          console.log("identity unconfirmed. less than 2 photos found.");
          if(photos.length>0){
             $('.photo-container').append('<p>One photo found on '+ photos[0].typeName+' </p>');
            }
          $('.photo-container').append('<p>Identity not confirmed, condition of 2 photos not met.</p>');
          }
         
        else{
          console.log('identity confirmed');
          console.log(photos);
          $.each(photos,function(index,photo){
            console.log(photo);
            $('.photo-container').append('<img src="' + photo.url + '"' + '>');
          })
        }

      });
  })

});
