 
 


// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}





$(document).ready(function(){
 
 
  var scrollSensitivitySetting = 50;
  var currentSlideNumber = 0;
  var totalSlideNumber = $('.background').length;


  document.addEventListener("deviceready", onDeviceReady, false);


  window.onload = function (){
    $('.skillbar').skillBars({ });
    
  };
  


    function onDeviceReady() {
      navigator.splashscreen.hide();
      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
      document.addEventListener("menubutton", onMenuKeyDown, false);

      
    
    sleep(2500).then(() => {
     var $thisSlide = $('.background').eq(currentSlideNumber);
     $thisSlide.show();
    sleep(1000).then(() => {
      $(".background").show();
    });});
    
    }



  function onPause() {
    $(".background").hide();
  }
  
  function onResume() {
    var $thisSlide = $('.background').eq(currentSlideNumber);

    $thisSlide.show();
   sleep(100).then(() => {
     $(".background").show();
   });
  }
  
  function onMenuKeyDown() {
      // Handle the menubutton event
  }

  


    $("#overalls").swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          //parallaxScroll(event);  

          if (direction == "down") {
            if (currentSlideNumber !== 0) {
              currentSlideNumber--;
              previousItem();
            }
          } else if (direction == "up") {
             if (currentSlideNumber !== totalSlideNumber - 1) {
              currentSlideNumber++;
              nextItem();
            }
          }

        

      }
    });


    function nextItem() {
        var $previousSlide = $('.background').eq(currentSlideNumber - 1);
        $previousSlide.css('transform', 'translate3d(0,-130vh,0)').find('.content-wrapper').css('transform', 'translateY(40vh)');
        currentSlideTransition();
    }
    function previousItem() {
        var $previousSlide = $('.background').eq(currentSlideNumber + 1);
        $previousSlide.css('transform', 'translate3d(0,30vh,0)').find('.content-wrapper').css('transform', 'translateY(30vh)');
        currentSlideTransition();
    }
    function currentSlideTransition() {
        var $currentSlide = $('.background').eq(currentSlideNumber);
        $currentSlide.css('transform', 'translate3d(0,-15vh,0)').find('.content-wrapper').css('transform', 'translateY(15vh)');
        ;
    }
    
   
 
  });
      
