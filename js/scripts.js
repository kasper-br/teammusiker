$( document ).ready(function() {
    $('.remove').on('click', function() {
        $('.hideme').toggleClass('hide');
    });

    $('.remove, .muted').on('click', function() {
      $(this).toggleClass('marked');
    });

    var video = $('#bgvideo')[0];
    var btn = $('#control');
    
    function myFunction() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();  
      }
    }

    $('.btn-pause').on('click', function() {
        myFunction();
        $(this).toggleClass('marked');
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

//function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

var TiltAnimation = function() {
  var
    hero,
    mouseX,
    mouseY;

  var _init = function() {
    mouseX    = 0;
    mouseY    = 0;
    slider    = $('#bgvideo')[0];
    _addEventHandlers();    
  }
  
  var _addEventHandlers = function() {
    window.addEventListener('mousemove', _getMousePos, false);
    // if (window.DeviceMotionEvent != undefined) {
    //   window.addEventListener('devicemotion', _accelerometerUpdate, false);
    // }
  }
 
  // var _accelerometerUpdate = function(e) {
  //   var aX = event.accelerationIncludingGravity.x*-1;
  //   var aY = event.accelerationIncludingGravity.y*-1;
  //   var aZ = event.accelerationIncludingGravity.z*-1;

  //   var xPosition = Math.atan2(aY, aZ) * 5;
  //   var yPosition = Math.atan2(aX, aZ) * 20;
    
  //   xPosition = Math.round(xPosition * 1000) / 1000;
  //   yPosition = Math.round(yPosition * 1000) / 1000;
    
  //   _animate(yPosition, xPosition);
  // }
  
  var _getMousePos = function(e) {
    e = e || window.event;
    
    mouseX = e.pageX;
    mouseY = e.pageY;
 
    var xPos = (mouseX / window.innerWidth) - 0.5;
    var yPos = (mouseY / window.innerHeight) - 0.5;
    var rotationYValue = 10 * xPos;
    var rotationXValue = 10 * yPos;
    
    _animate(rotationYValue,rotationXValue);
  }
  
  var _animate = function(rotationYValue, rotationXValue) {
    TweenLite.to(slider, 0.6, { rotationY:rotationYValue, rotationX:rotationXValue, ease:Power1.easeOut, transformPerspective:900, transformOrigin:"center" });
  }
  
  return {
    init: _init
  }
}();

TiltAnimation.init();