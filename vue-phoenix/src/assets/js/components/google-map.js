//  Map --- https://developers.google.com/maps/documentation/javascript/
    var handleGoogleMaps = function() {
      function initialize() {
        // Specify features and elements to define styles.
        var styleArray = [{
          featureType: "all",
          stylers: [{
            saturation: -80
          }]
        }, {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{
            hue: "#00ffee"
          }, {
            saturation: 50
          }]
        }, {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{
            visibility: "off",
          }]
        }];

        // Create a map object and specify the DOM element for display.
        var MexicoCity = new google.maps.LatLng(19.3646662, -99.2616682);
        var map = new google.maps.Map(document.getElementById('map'), {
          center: MexicoCity,
          styles: styleArray,
          scrollwheel: false,
          zoom: 15,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: false,
          scaleControl: false
        });

        console.log(document.getElementById('map'));

        var coordInfoWindow = new google.maps.InfoWindow();
        coordInfoWindow.setContent(createInfoWindowContent(MexicoCity, map.getZoom()));
        coordInfoWindow.setPosition(MexicoCity);
        coordInfoWindow.open(map);

        map.addListener('zoom_changed', function() {
          coordInfoWindow.setContent(createInfoWindowContent(MexicoCity, map.getZoom()));
          coordInfoWindow.open(MexicoCity);
        });

        var TILE_SIZE = 256;

        function createInfoWindowContent(latLng, zoom) {
          var scale = 1 << zoom;

          var worldCoordinate = project(latLng);

          var pixelCoordinate = new google.maps.Point(
            Math.floor(worldCoordinate.x * scale),
            Math.floor(worldCoordinate.y * scale));

          var tileCoordinate = new google.maps.Point(
            Math.floor(worldCoordinate.x * scale / TILE_SIZE),
            Math.floor(worldCoordinate.y * scale / TILE_SIZE));

          return [
            'Av. Javier Barros Sierra 540, <br> Del. Álvaro Obregón, Lomas de Santa Fe, <br> Ciudad de México, México'
          ].join('<br>');
        }

        // The mapping between latitude, longitude and pixels is defined by the web
        // mercator projection.
        function project(latLng) {
          var siny = Math.sin(latLng.lat() * Math.PI / 180);

          // Truncating to 0.9999 effectively limits latitude to 89.189. This is
          // about a third of a tile past the edge of the world tile.
          siny = Math.min(Math.max(siny, -0.9999), 0.9999);

          return new google.maps.Point(
            TILE_SIZE * (0.5 + latLng.lng() / 360),
            TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
        }
      }
      initialize();
    };

module.exports= {
      init: function() {
        handleGoogleMaps(); // initial setup for google map
      }
  };


