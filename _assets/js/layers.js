var getLayers = function() {
  console.log("Loading Layers");

  var obj = {
    action: 'getLayers'
  };

  jQuery.ajax(url_base + '/application/controller/layers.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      cHotelData = jQuery.parseJSON(e);
      renderDefaultLayers();
    },
    error: function (e) {
      console.log("Error! getLayers", e);
    }
  });
};

var renderDefaultLayers = function() {
  toggleLayer('nsa');
};

var populateLayersContainer = function() {
  _.each(layers, function(layer, key) {
    var buttonEl = jQuery('<a/>');
    buttonEl.addClass('layer-btn ui basic yellow fluid button');
    buttonEl.data('name', key);
    jQuery(buttonEl).append('<div class="legend-item"><img src="_assets/img/icn-map-'+key+'.png" /><p>'+layer.name+'<br /><span class="minor">'+layer.location+'</span></p></div>');
    jQuery(buttonEl).click(function() {
      toggleLayer(jQuery(this).data('name'));
    });

    jQuery('#layers-container').append(buttonEl);
  });
};

var toggleLayer = function(name) {
  if (layers[name].active === true) {
    layers[name].active = false;
    removeGeoMarkers(layers[name].type);
  } else if (layers[name].active === false) {
    layers[name].active = true;
    renderGeoMarkers(layers[name].type);
  }

  // we want to tie the UI as closely as possible to the layer data struct, so we're doing this instead of relying on toggleClass or semantic-ui's built in thing
  jQuery('.layer-btn').each(function(el) {
    var name = jQuery(this).data('name');
    if (layers[name].active === true) {
      jQuery(this).addClass('active');
    } else {
      jQuery(this).removeClass('active');
    }
  });

  jQuery('#num-active-layers').text(_.filter(layers, {active: true}).length + ' LAYERS');
};