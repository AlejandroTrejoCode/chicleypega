// fullpage.js 
var services;
var selectedServices = [];
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
    
    $('#select-services-button').on('click', function(){
        $('#select-services').css('width','100%');
    });

    $('.closebtn').on('click', function(){
        $('#services-overlay').css('width','0%');
    });
    $('#closebtn-services').on('click', function(){
        $('#select-services').css('width','0%');
    });
     $.getJSON('./assets/json/services.json', function(data){
        services = data
    });

    $('#sendMessage').on('click', function(){
        var name = document.getElementById('name').value
        var mail = document.getElementById('mail').value
        var comments = document.getElementById('comments').value
        var services = selectedServices.join(", ");
        var url = " http://chicleypegacreativo.com/chicleypegacreativo/phpChicle/sendMail.php?name=" + name + "&email=" + mail +"&comment="+ comments +"&services="+services;
        $.get(url, function(){
            console.log('http')
        });
    });

    Map();
});
function Map() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
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

function pushService(id){
    var auxId = id.replace("-list", "");
    console.log(auxId)
    if(!selectedServices.includes(auxId)){
        selectedServices.push(auxId);
        $('#' + id).css('background','#f0ce2b');
    }
    else{
        $('#' + id).css('background','transparent');
        selectedServices = selectedServices.filter(item => item !== auxId)
    }
    $("#services-selected").text(selectedServices.join(" + "));
}