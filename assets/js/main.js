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
    
});