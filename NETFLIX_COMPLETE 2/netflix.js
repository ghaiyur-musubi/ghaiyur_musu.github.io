$(function() {

  var backgroundImage = 'images/netflix-background.jpg';

  setInterval(function() {

    if (backgroundImage == 'images/netflix-background.jpg') {
      backgroundImage = 'images/netflix-background-2.jpg';
    } else {
      backgroundImage = 'images/netflix-background.jpg';      
    }

    $('#background-image').css('background-image', 'url("' + backgroundImage  + '")');

  }, 1000);

});