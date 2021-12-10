$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme1').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window + 150 > bottom_of_object ){
                $(this).addClass('showme');
            }
        });
        $('.hideme2').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window + 150 > bottom_of_object ){
                $(this).addClass('showme');
            }
        });
        $('.hideme3').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window + 150 > bottom_of_object ){
                $(this).addClass('showme');
            }
        });
    });
});

$(".texte_centrer").hide().fadeIn(2000);