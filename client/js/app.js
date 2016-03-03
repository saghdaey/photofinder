$(document).ready(function(){ 
  //submit event firing to server
  $('[name = submit]').on('click', function(event){
    event.preventDefault();
    console.log("why"); //doesnt work
    var email = $('[name = email]').val()
    console.log("hey"); //also doesnt work
    //check if email is valid
    //if email invalid add pop up: "the email address you entered is invalid. please try again"
      $.ajax({
        method: "POST",
        url: "/api/fullcontact/visitors",
        data:{email: email}
      }).done(function(response){
        console.log(response);
        if(response.photos==undefined){
          console.log("identity not confirmed. no data found by web scraping");
          $('.photo-container').append('<p>Identity not confirmed, no photos found.</p>');
        }
        else{ //photo was found - update webpage 
          var photos=response.photos;
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
