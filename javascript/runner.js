$(document).ready(function(){

  $("button").on("click", function(){
    $.getJSON('http://www.telize.com/geoip?callback=?', function(json) {
      $("main").append('The IP address is: ' + json.ip);
      $("main").append('Latitude: ' + json.latitude);
      $("main").append('Longitude: ' + json.longitude);
    });
  });
});
