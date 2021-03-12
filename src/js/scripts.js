$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
    

                /*
                    Wow
                */
                new WOW().init()



});


var btn = document 
            .getElementsByClassName("collapse1"); 
  
        btn[0].addEventListener("click", function () { 
            this.classList.toggle("active"); 
            var content = this.nextElementSibling; 
            if (content.style.display === "block") { 
                content.style.display = "none"; 
            } else { 
                content.style.display = "block"; 
            } 
        }); 




    





