$(document).ready(function(){

  $("button").on("click", function(){
    $("#progress-bar").append('loading...')
    $.getJSON('http://www.telize.com/geoip?callback=?', function(json) {
      $("#progress-bar").empty()
      $("#info").append('IP address: ' + json.ip + "<br>");
      $("#info").append('Latitude: ' + json.latitude + "<br>");
      $("#info").append('Longitude: ' + json.longitude + "<br>");
    });

  });
});
