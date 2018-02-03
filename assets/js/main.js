// fullpage.js 
var services;
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
     $.getJSON('./assets/json/services.json', function(data){
        services = data
    });

    
});

function overlayEfectIn(id){
    console.log(id)
    $('#' + id).addClass('animated fadeIn'); $('#' + id).removeClass('fadeOut'); 
}
    function overlayEfectOut(id){
    $('#'+id).addClass('animated fadeOut');
}

function getService(id){
    console.log(id);
    var title = services[id].title
    var description = services[id].description
    var image = services[id].image
    $("#service-title").text(title);
    $("#service-description").text(description);
    document.getElementById("service-img").src = "assets/img/" + image;
}