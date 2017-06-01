// Map
if ($(window).innerWidth > 767) {
  var scale = 15,
      drag = true,
      scroll = true,
      markerScaledSize = 80;
} else {
  scale = 13;
  drag = false;
  scroll = false;
  markerScaledSize = 40;
}
var style1 = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"lightness":"-3"},{"saturation":"-47"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"saturation":"0"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"lightness":"-29"},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aaaaaa"},{"visibility":"on"}]}],
  style2 = [
      {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#380d0d"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#dedddb"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#1f1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#c1c9cc"
          },
          {
            "visibility": "on"
          }
        ]
      }
      ];
var map = new google.maps.Map(document.getElementById("map"), {
  zoom: scale,
  center: new google.maps.LatLng(39.966934, -75.173963),
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  draggable: drag,
  scrollwheel: scroll,
  styles: style1
});
var marker = new google.maps.Marker({
  position: {lat: 39.966934, lng: -75.173963},
  map: map,
  icon: {
    url: "img/map/marker.svg",
    size: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(40, 80),
    scaledSize: new google.maps.Size(markerScaledSize, markerScaledSize)
  },
  title: 'KFL web design studia',
  zIndex: 1000
});
marker.setMap(map);
// --------------------------------------------
