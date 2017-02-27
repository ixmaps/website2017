// GLOBALS

// this should be moved somewhere eventually - either config or the backend
// I really prefer being explicit here, giving them keys (boolean, position, kind, etc) instead of 'constraint1', 'constraint2', etc. I'm hoping we can adjust the backend to agree.
// use _.keys(constraints) to get the array of keys (boolean, position, kind, etc)
// I'm open to adjusting this, basically to include the keys inside the objects (constraints becomes an array of objects)
const constraints = [
  {
    "name": "boolean",
    "options": [
      {
        "value": "does",
        "display": "Does"
      },
      {
        "value": "doesNot",
        "display": "Does not"
      }
    ]
  },
  {
    "name": "position",
    "options": [
      {
        "value": "originate",
        "display": "Originate"
      },
      {
        "value": "terminate",
        "display": "Terminate"
      },
      {
        "value": "goVia",
        "display": "Goes via"
      },
      {
        "value": "contain",
        "display": "Contain"
      }
    ]
  },
  {
    "name": "kind",
    "options": [
      {
        "value": "submitter",
        "display": "Submitter name"
      },
      {
        "value": "zipCodeSubmitter",
        "display": "Submitter postcode"
      },
      {
        "value": "ISP",
        "display": "ISP/Carrier"
      },
      {
        "value": "city",
        "display": "City"
      },
      {
        "value": "region",
        "display": "Province/State"
      },
      {
        "value": "country",
        "display": "Country"
      },
      {
        "value": "zipCode",
        "display": "Postcode"
      },
      {
        "value": "hostName",
        "display": "Hostname"
      },
      {
        "value": "destHostName",
        "display": "Destination hostname"
      },
      {
        "value": "ipAddr",
        "display": "IP address"
      },
      {
        "value": "asnum",
        "display": "AS number"
      },
      {
        "value": "trId",
        "display": "Traceroute id"
      }
    ]
  },
  {
    "name": "input",
    "options": []
  },
  {
    "name": "join",
    "options": [
      {
        "value": "and",
        "display": "AND"
      },
      {
        "value": "or",
        "display": "OR"
      }
    ]
  }
]


// MAIN FUNCTIONS
var init = function() {
  setUpGMaps();
  setUpClickHandlers();
  createAdvSearchRow("first");
};


var createAdvSearchRow = function(row) {
  var inputHolderEl = $('<div/>');
  inputHolderEl.addClass('advanced input-holder');

  // go over each constraint
  _.each(constraints, function(con) {
    var constraintEl = $('<div/>');
    constraintEl.addClass('advanced-input constraint-container constraint-boolean');
    constraintEl.data('constraint', con.name);
    $(inputHolderEl).append(constraintEl);

    // go over the options in each constraint (input is special case)
    if (con.name === "input") {
      var divEl = '<div class="ui fluid input"><input type="text" placeholder="Hostname"></div>';
      $(constraintEl).append(divEl);
    } else {
      var selectEl = $('<select/>');
      selectEl.addClass('ui fluid dropdown');
      _.each(con.options, function(opt) {
        selectEl.append(new Option(opt.display, opt.value, true, true));
      });
      $(constraintEl).append(selectEl);
    }
  });

  // append either a + or a - button
  var controlsEl = $('<div/>');
  controlsEl.addClass('advanced-input constraint-buttons');
  var buttonEl = $('<button/>');
  buttonEl.addClass('circular ui icon button');
  if (row === "first") {
    $(buttonEl).append('<i class="icon settings"><img src="_assets/img/icn-add.svg" alt="add"></i>');
  } else {
    $(buttonEl).append('<i class="icon settings"><img src="_assets/img/icn-remove.svg" alt="remove"></i>');
  }
  $(controlsEl).append(buttonEl);
  $(inputHolderEl).append(controlsEl);

  $('#as-search-container').append(inputHolderEl);
};


var setUpGMaps = function() {
  // we have to create this script element manually if we want to keep our key hidden
  var scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';
  scriptEl.src = 'https://maps.google.com/maps/api/js?v=3&libraries=geometry&key='+config.gmaps.key+'&callback=initGMaps';
  document.body.appendChild(scriptEl);
};

var initGMaps = function() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    // TODO: move this to some config type area?s
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










var setUpClickHandlers = function() {

  // quick search buttons
  $('#search-header .qs-last-contributed-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-via-nsa-city-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-via-boomerangs-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-from-my-isp-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-from-my-cty-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-from-my-country-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });

  // basic search button
  $('#search-header .submit-basic-search-btn').click(function() {
    // iterate over all of the 'from' conditions
    $('#bs-originate-popup input').each(function(index, el) {
      if ($(el).val() != "") {
        console.log('Originate ' + $(el).data('constraint') + ': ' + $(el).val());
      }
    });
    // iterate over all of the 'via' conditions
    $('#bs-via-popup input').each(function(index, el) {
      if ($(el).val() != "") {
        console.log('Via ' + $(el).data('constraint') + ': ' + $(el).val());
      }
    });
    // iterate over all of the 'to' conditions
    $('#bs-terminate-popup input').each(function(index, el) {
      if ($(el).val() != "") {
        console.log('Terminate ' + $(el).data('constraint') + ': ' + $(el).val());
      }
    });
  });

  //advanced search buttons


  $('#submit-adv-search-btn').click(function() {

  })


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