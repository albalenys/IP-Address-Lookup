$(document).ready(function(){

  $("button").on("click", function(){
    $("#info").empty();
    $("#progress-bar").append('loading' + '<div class="animated shake">...</div>')
    $.getJSON('http://www.telize.com/geoip?callback=?', function(json) {
      $("#progress-bar").empty()
      $("#info").append('IP address: ' + json.ip + "<br>");
      $("#info").append('Latitude: ' + json.latitude + "<br>");
      $("#info").append('Longitude: ' + json.longitude + "<br>");
    });

  });
});
