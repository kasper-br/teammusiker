$( document ).ready(function() {
    $('.remove').on('click', function() {
        $('.hideme').toggleClass('hide');
    });

    var video = document.getElementById("bgvideo");
    var btn = document.getElementById("control");
    
    function myFunction() {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }

    $('.pause').on('click', function() {
        myFunction();
    });

    $('#about').on('click', function() {
        $('main').toggleClass('show');
    });

    //MUTE
   $("#bgvideo").prop('muted', true);

   $("#muted").click( function (){
     if( $("#bgvideo").prop('muted') ) {
           $("#bgvideo").prop('muted', false);
     } else {
       $("#bgvideo").prop('muted', true);
     }
   });
  

});