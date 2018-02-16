var services;
var hash;
var selectedServices = [];
$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false
        
    });
    new WOW().init();
    
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $("#header").addClass('coloredNav');
        } else {
            $("#header").removeClass('coloredNav');
        }
    });
    
    $(".anchor-services").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            hash = "#services";

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
          });
        }
    });
    
    $(".nav-item a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
          });
        }
    });
    
    $(".viewall").on('click', function(){
        $(location).attr('href','portafolio.html');
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
    $('#closePortafolio').on('click', function(){
        $('#portafolio-overlay').css('width','0%');
    });
    $.getJSON('./assets/json/services.json', function(data){
        services = data
    });
   
    $('#sendMessage').on('click', function(){
        var send = true;



        var name = document.getElementById('name').value;
        if(name == ''){
            send = false;
            $('#error-label-name').css('display', 'inherit');
            
        }
        else {
            $('#error-label-name').css('display', 'none');
            
        }
        var mail = document.getElementById('mail').value;
        if(mail == ''){
            send = false;
            $('#error-label-mail-1').css('display', 'inherit');

        }
        else {
            $('#error-label-mail-1').css('display', 'none');
            if(mail.indexOf('@') < 0){
                send = false;
                $('#error-label-mail-2').css('display', 'inherit');
            }
            else {
                $('#error-label-mail-2').css('display', 'none');
                
            }
            
        }
        
        var comments = document.getElementById('comments').value
        var services = selectedServices.join(", ");
        var url = " http://chicleypegacreativo.com/chicleypegacreativo/phpChicle/sendMail.php?name=" + name + "&email=" + mail +"&comment="+ comments +"&services="+services;
        if(send){
            $.get(url, function(){
            });
            $('.form-success').css('display', 'inherit');
        }

        
    });

    Map();
    
});


function Map() {
    LatLng = new google.maps.LatLng(21.1590935, -86.8249968);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: LatLng,
        zoom: 18
    };
    var marker = new google.maps.Marker({
        position: LatLng,
        title:"Chicle y Pega"
    });
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker.setMap(map);
}
function overlayEfectIn(id){
    console.log(id)
    $('#' + id).addClass('animated fadeIn'); $('#' + id).removeClass('fadeOut'); 
}
    function overlayEfectOut(id){
    $('#'+id).addClass('animated fadeOut');
}

function getService(id){
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
        var index = selectedServices.indexOf(auxId);
        if (index !== -1) selectedServices.splice(index, 1);
    }
    $("#services-selected").text(selectedServices.join(" + "));
}