$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    });
    


    // typing wala

    var typed = new Typed(".typing",{
        strings: ["Laptops", "Repairing", "Router","Computer gadgets","old laptops","Mobiles","speakers"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true 
    });

          //toggle menuko lagi
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

   
});