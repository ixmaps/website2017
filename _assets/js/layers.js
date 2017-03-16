// stuff related to layers goes here

/*Note: added "type" the old numeric id to render layes */
var layers = {
  "nsa": {
    "type":1,
    "name": "NSA Internet Interception Site\/Suspected NSA Internet Inception Site",
    "active": false,
    "data": [],
    "location": "USA"
  },
  "ixp": {
    "type":5,
    "name": "Public Internet Exchange Point (IXP)",
    "active": false,
    "data": [],
    "location": "Canada"
  },
  "ipt": {
    "type":6,
    "name": "CIRA\/M\-Lab Internet Performance Test (IPT) Server",
    "active": false,
    "data": [],
    "location": "Canada"
  },
  "att": {
    "type":7,
    "name": "AT\&T\/Fairview Suspected Surveillance Site",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "verizon": {
    "type":8,
    "name": "Verizon\/Stormbrew Suspected Surveillance Site",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "google": {
    "type":3,
    "name": "Google Data Centre",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "ch": {
    "type":2,
    "name": "Carrier Hotel",
    "active": false,
    "data": [],
    "location": "USA and Canada"
  },
  "undersea": {
    "type":4,
    "name": "Undersea Cable Landing Point",
    "active": false,
    "data": [],
    "location": "USA and Canada"
  }
}

var getLayers = function() {
  console.log("Loading Layers");

  var obj = {
    action: 'getLayers'
  };

  jQuery.ajax(url_base + '/application/controller/layers.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Ok! getLayers");
      cHotelData = jQuery.parseJSON(e);
      renderDefaultLaters();
      

    },
    error: function (e) {
      console.log("Error! getLayers", e);
    }
  });
};

var renderDefaultLaters = function() {
  setTimeout(function(){

    /* Set default active layers*/
    layers[jQuery('#nsa').data('name')].active = true;
    renderGeoMarkers(1);
    jQuery('#nsa').addClass('active');

    /* Example */
    /*jQuery('#ixp').addClass('active');
    layers[jQuery('#ixp').data('name')].active = true;
    renderGeoMarkers(5);*/
    
    jQuery('#num-active-layers').text(_.filter(layers, {active: true}).length + ' LAYERS');
  }, 500);
}


var populateLayersContainer = function() {
  _.each(layers, function(layer, key) {
    var buttonEl = jQuery('<a/>');
    jQuery(buttonEl).attr('id', key);
    buttonEl.addClass('layer-btn ui basic yellow fluid toggle button');
    buttonEl.data('name', key);
    jQuery(buttonEl).append('<div class="legend-item"><img src="_assets/img/icn-map-'+key+'.png" /><p>'+layer.name+'<br /><span class="minor">'+layer.location+'</span></p></div>');
    jQuery(buttonEl).click(function() {
      jQuery(this).toggleClass('active');      
      var layerId = jQuery(this).attr("id");

      if (layers[jQuery(this).data('name')].active === true) {
        layers[jQuery(this).data('name')].active = false;
        removeGeoMarkers(layers[layerId].type);

      } else if (layers[jQuery(this).data('name')].active === false) {
        layers[jQuery(this).data('name')].active = true;
        renderGeoMarkers(layers[layerId].type);
      }

      jQuery('#num-active-layers').text(_.filter(layers, {active: true}).length + ' LAYERS');
    });

    jQuery('#layers-container').append(buttonEl);
  });
}


