$( document ).ready(function() {

    //HIDE
    $('.remove').on('click', function() {
        $('.hideme').toggleClass('hide');
    });

    //TOGGLER MELLEM FORSKELLIGE LGOOER
    $('.remove, .muted').on('click', function() {
      $(this).toggleClass('selected');
    });

    //VARIABLER
    var video = $('#bgvideo')[0];
    var btn = $('#control');
    
    //FUNCTION TIL AT PLAY/PAUSE VIDEO
    function videoPlayToggler() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();  
      }
    }

    //KLIK FUNCTION FOR PAUSE KNAP
    $('.pause').on('click', function() {
        videoPlayToggler();
        $(this).toggleClass('selected');
    });
    
    //VIS BOKSEN I BUNDEN
    $('#about, #close').on('click', function() {
        $('main').toggleClass('show');
    });

    //CLICK FUNCTION TIL AT MUTE
   $("#bgvideo").prop('muted', true);
   $("#muted").click( function (){
     if( $("#bgvideo").prop('muted') ) {
           $("#bgvideo").prop('muted', false);
     } else {
       $("#bgvideo").prop('muted', true);
     }
   });
});

//SMOOTH SCROLL
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});