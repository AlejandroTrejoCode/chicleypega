// fullpage.js 
$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false
	});
    
    new WOW().init();
    
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 500) {
            $("#header").addClass('coloredNav');
        } else {
            $("#header").removeClass('coloredNav');
        }
    });
    
    $('.services-item').on('mouseover', function(){
        console.log(this.id);
    });
    
    $('.services-item').on('click', function(){
        $('#services-overlay').css('width','100%');
    });
    
    $('.closebtn').on('click', function(){
        $('#services-overlay').css('width','0%');
    });
    
    $.getJSON('result.json', function(data){
        console.log(data.name);
    });
    
    console.log("Ready");
});

function overlayEfectIn(id){
    console.log(id)
    $('#' + id).addClass('animated fadeIn'); $('#' + id).removeClass('fadeOut'); 
}
    function overlayEfectOut(id){
    $('#'+id).addClass('animated fadeOut');
}
