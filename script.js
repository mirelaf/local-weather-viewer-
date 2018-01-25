  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude)
    .done(function(json) {
      $(".location").html(json.name+", "+json.sys.country);
      $(".weather-pictogram").attr("src", json.weather[0].icon);
      $(".description").html(json.weather[0].description);
      var tempC = Math.round(json.main.temp*10)/10;
      var tempF = Math.round((tempC*9/5+32)*10)/10;
      $(".temperature").html(tempC + "° C");
      $(function() {
  $(".scale-switch-button").change(function() {
    if ($(this).prop("checked")) {
      $(".temperature").html(tempF + "° F");
    } else {
      $(".temperature").html(tempC + "° C");
    }
  });
});
   })
    .fail(function() {
         $(".container").html("Oups! There seems to be an error somewhere.")
      });
   }) 
} else {
    $(".container").html("Geolocation is not supported by this browser.");
  }