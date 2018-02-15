// fullpage.js 
var services;
var selectedServices = [];
var portafolio;
$(document).ready(function() {
	/*$('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false
	});
    */
    new WOW().init();
    
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $("#header").addClass('coloredNav');
        } else {
            $("#header").removeClass('coloredNav');
        }
    });
    
    $(".nav-item a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
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
    $.getJSON('./assets/json/portafolio.json', function(data){
        portafolio = data;
        loadImages('diseño');
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

    //Map();
    
});

function loadImages(category){
    console.log(portafolio[category].row1);
    document.getElementById("portafolio1").src = "assets/img/" + portafolio[category].row1[0];
    document.getElementById("portafolio2").src = "assets/img/" + portafolio[category].row1[1];
    document.getElementById("portafolio3").src = "assets/img/" + portafolio[category].row1[2];
    document.getElementById("portafolio4").src = "assets/img/" + portafolio[category].row2[0];
    document.getElementById("portafolio5").src = "assets/img/" + portafolio[category].row2[1];
    document.getElementById("portafolio6").src = "assets/img/" + portafolio[category].row3[0];
    document.getElementById("portafolio7").src = "assets/img/" + portafolio[category].row3[1];
    document.getElementById("portafolio8").src = "assets/img/" + portafolio[category].row3[2];
    document.getElementById("portafolio9").src = "assets/img/" + portafolio[category].row4[0];
    document.getElementById("portafolio10").src = "assets/img/" + portafolio[category].row4[1];
}
function selectImage(id){
    var img = document.getElementById(id).src;
    console.log();
    document.getElementById("portafolio-img").src = img;
    $('#portafolio-overlay').css('width','100%');
}
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