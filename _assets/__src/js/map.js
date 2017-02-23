// GLOBAL VARS



// MAIN FUNCTIONS
var init = function() {
  setUpClickHandlers();
  initGMaps();
}


var setUpClickHandlers = function() {

  // UI click events
  $('.top.menu .item').tab();
  $("table").tablesorter({});
  $('.ui.rating').rating('disable');

  $("#settings-modal").click(function(){
    $('.settings.modal').modal('show');
  });

  $("#traceroutes-modal").click(function(){
    $('.traceroutes.modal').modal('show');
  });

  $("#router-modal").click(function(){
    $('.router.modal').modal('show');
  });

  $("#carrier-modal").click(function(){
    $('.carrier.modal').modal('show');
  });

  $('a.from.basic-srch-itm')
    .popup({
      popup: '.from.popup',
      inline: true,
      on: 'click',
    })
  ;
  $('.basic-srch-itm.via')
    .popup({
      popup: '.via.popup',
      inline: true,
      on: 'click',
    })
  ;
  $('.basic-srch-itm.to')
    .popup({
      popup: '.to.popup',
      inline: true,
      on: 'click',
    })
  ;
  $('.ui.sidebar')
    .sidebar({
      context : $('.map-holder'),
      dimPage : false,
      closable : false // If this is set to true (the default value) clicking anywhere else on the page will close the overlay. Remove this line if that behaviour is desired.
    })
    .sidebar('setting', 'transition', 'overlay', 'toggle')
    .sidebar('attach events', '.map-holder .layers-toggle .toggle.button')
  ;
  $('.ui.accordion')
    .accordion()
  ;
  $('.toggle.button')
    .state({
    })
  ;
};

initGMaps = function() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]
    }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,
    title: 'Snazzy!'
  });
};