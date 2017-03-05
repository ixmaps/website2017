// stuff related to layers goes here

var layers = {
  "nsa": {
    "name": "NSA Internet Interception Site\/Suspected NSA Internet Inception Site",
    "active": false,
    "data": [],
    "location": "USA"
  },
  "ixp": {
    "name": "Public Internet Exchange Point (IXP)",
    "active": false,
    "data": [],
    "location": "Canada"
  },
  "ipt": {
    "name": "CIRA\/M\-Lab Internet Performance Test (IPT) Server",
    "active": false,
    "data": [],
    "location": "Canada"
  },
  "att": {
    "name": "AT\&T\/Fairview Suspected Surveillance Site",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "verizon": {
    "name": "Verizon\/Stormbrew Suspected Surveillance Site",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "google": {
    "name": "Google Data Centre",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "undersea": {
    "name": "Undersea Cable Landing Point",
    "active": false,
    "data": [],
    "location": "USA and Canada"
  }
}

var getLayers = function() {
  console.log("Loading Chotel data");

  var obj = {
    action: 'getLayers'
  };

  jQuery.ajax(url_base + '/application/controller/layers.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Ok! getLayers");
      cHotelData = jQuery.parseJSON(e);
    },
    error: function (e) {
      console.log("Error! getLayers", e);
    }
  });
};

var populateLayersContainer = function() {
  _.each(layers, function(layer, key) {
    var buttonEl = jQuery('<a/>');
    buttonEl.addClass('layer-btn ui basic yellow fluid toggle button');
    buttonEl.data('name', key);
    jQuery(buttonEl).append('<div class="legend-item"><img src="_assets/img/icn-map-'+key+'.png" /><p>'+layer.name+'<br /><span class="minor">'+layer.location+'</span></p></div>');
    jQuery(buttonEl).click(function() {
      jQuery(this).toggleClass('active');
      if (layers[jQuery(this).data('name')].active === true) {
        layers[jQuery(this).data('name')].active = false;
      } else if (layers[jQuery(this).data('name')].active === false) {
        layers[jQuery(this).data('name')].active = true;
      }

      jQuery('#num-active-layers').text(_.filter(layers, {active: true}).length + ' LAYERS');
      console.log('TODO: render map');
    });

    jQuery('#layers-container').append(buttonEl);
  });
}


