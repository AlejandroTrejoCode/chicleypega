// fullpage.js 
$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false
	});
    
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 500) {
            $("#header").addClass('coloredNav');
        } else {
            $("#header").removeClass('coloredNav');
        }
    });
    
    $(".overlay-container").on("mouseenter", function(){
        this.addClass("animated fadeIn");
        this.removeClass('fadeOut');
    });
    $(".overlay-container").on("mouseleave", function(){
        this.addClass("animated fadeOut");
        this.removeClass('fadeIn');
    });
    
});