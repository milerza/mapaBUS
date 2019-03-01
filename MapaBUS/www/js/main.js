{
var lat_atual = -15.8015147;
var lon_atual =-43.3099009;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition,showError);
  

    } else {
      alert("Geolocation is not supported by this browser.");
    }
    
  }
  function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
  
  function showPosition(position) {
    lat_anterior = lat_atual;
    lon_anterior =  lon_atual;
    lat_atual = position.coords.latitude;
    lon_atual = position.coords.longitude; 

    var myMovingMarker = L.Marker.movingMarker(
      [[lat_anterior,lon_anterior],[lat_atual, lon_atual]],[10]
    ).addTo(map_afcdd406e90d4ec5b83ef05f640d2838);

    var icon_e1148c321c5d48509009e49bc8284c1e = L.AwesomeMarkers.icon({
        icon: 'info-sign',
        iconColor: 'white',
        markerColor: 'red',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
        });
        myMovingMarker.setIcon(icon_e1148c321c5d48509009e49bc8284c1e);


var popup_b4b5227e05d94be7867abd17f8a086f3 = L.popup({maxWidth: '300'

});


    var html_c3f6314c3f094806b38187c59dac58d3 = $('<div id="html_c3f6314c3f094806b38187c59dac58d3" style="width: 100.0%; height: 100.0%;"><h3>VOCÊ ESTÁ AQUI!</h3></div>')[0];
    popup_b4b5227e05d94be7867abd17f8a086f3.setContent(html_c3f6314c3f094806b38187c59dac58d3);


    myMovingMarker.bindPopup(popup_b4b5227e05d94be7867abd17f8a086f3)
;

       myMovingMarker.start();
    console.log(position.coords.latitude);
  }
  
  setInterval(getLocation,18);

  

}
