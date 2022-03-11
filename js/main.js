
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".blue1").css("background" , "blue1");
        }
  
        else{
            $(".blue2").css("background" , "#000");  	
        }
    })
  })