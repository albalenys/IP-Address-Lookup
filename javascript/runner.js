$(document).ready(function(){

  $("button").on("click", function(){
    $("#progress-bar").append('loading...')
    $.getJSON('http://www.telize.com/geoip?callback=?', function(json) {
      $("#progress-bar").empty()
      $("main").append('The IP address is: ' + json.ip + "<br>");
      $("main").append('Latitude: ' + json.latitude + "<br>");
      $("main").append('Longitude: ' + json.longitude + "<br>");
    });

  });
});
