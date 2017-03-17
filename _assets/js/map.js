// generic js related to map.php goes here

/* Gloal Vars for my location: now populated via ajax call */
var myIp = '';
var myCity = '';
var myCountry = '';
var myIsp = '';
var myAsn = '';
var myLat = '';
var myLong = '';

var autocompletes = {
  "country": [],
  "region": [],
  "city": [],
  "zipCode": [],
  "ISP": [],
  "submitter": []
}

// MAIN FUNCTIONS
var init = function() {
  getMyLocation();
  setUpGMaps();
  setDefaultMapSettings();

  getLayers(); // TODO: need to fix/agree on json structure
  populateLayersContainer(); /* TODO: move this after loading layers data */

  getPrivacyReport();

  if (initMode==0) {
    jQuery('.opening.modal').modal('show'); // open user location modal

  } else if (initMode==1) { // trId is passed to map page
    submitCustomQuery(trIdFilter);

  } else if (initMode==2) { // search filters are passed to map page
    processPostedData(postedData);
  }

  createASRow("first"); // TODO: fix depending on initMode

  setUpClickHandlers();
  _.each(autocompletes, function(key, value) {
    loadAutocompleteData(value);
  });
};

var getMyLocation = function() {
  jQuery('#my-location-status').html("Loading location...");
  var obj = {
    action: 'getMyLocation'
  };

  jQuery.ajax(url_base + '/application/controller/mygeoip.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("getMyLocation data loaded ");
      // populate js auto-complete array(s)
      var data = jQuery.parseJSON(e);
      console.log(data);
      setMyLocationData(data);
    },
    error: function (e) {
      console.log("Error! getMyLocation data can't be loaded", e);
    }
  });

}

/* Set user location and isp info*/
var setMyLocationData = function(data) {
  jQuery('#my-location-status').html("");

  myIp = data.myIp;
  myCity = data.myCity;
  myCountry = data.myCountry;
  myIsp = data.myIsp;
  myAsn = data.myAsn;
  myLat = data.myLat;
  myLong = data.myLong;

  jQuery('.userloc-ip').text(myIp);
  jQuery('.userloc-city').val(myCity);
  jQuery('.userloc-country').val(myCountry);
  jQuery('.userloc-isp').text(myIsp);
  jQuery('.userloc-asn').text(myAsn);
}

var setUpClickHandlers = function() {
  //**************** SEARCH ****************//
  // quick search buttons
  jQuery('#search-header .qs-last-contributed-btn').click(function() {
    constructLastContributed();
  });
  jQuery('#search-header .qs-via-nsa-city-btn').click(function() {
    constructViaNSA();
  });
  jQuery('#search-header .qs-via-boomerangs-btn').click(function() {
    constructBoomerangs();
  });
  jQuery('#search-header .qs-from-my-isp-btn').click(function() {
    constructFromMyIsp();
  });
  jQuery('#search-header .qs-from-my-cty-btn').click(function() {
    constructFromMyCity();
  });
  jQuery('#search-header .qs-from-my-country-btn').click(function() {
    constructFromMyCountry();
  });
  // basic search button
  jQuery('#bs-submit-btn').click(function() {
    constructBS();
  });
  // advanced search buttons
  jQuery('#as-submit-btn').click(function() {
    constructAS();
  });
  jQuery('#as-clear-btn').click(function() {
    jQuery('.advanced.input-holder').remove();
    createASRow("first");
  });
  // my location submit button
  jQuery('#myloc-submit-btn').click(function() {
    submitUserLocObject();
    jQuery('.opening.modal').modal('hide');
  });

  /* Map Settings button */
  jQuery('.map-settings-button').click(function() {
    jQuery('.settings.modal').modal('show');
  });

  /* Map help button */
  jQuery('#map-help-btn').click(function() {
    jQuery('.map-help.modal').modal('show');
  });


  //**************** TRACEROUTE RESULTS ****************//
  jQuery('#remove-all-trs-btn').click(function() {
    removeAllTrs();
  });

  jQuery('#add-all-trs-btn').click(function() {
    addAllTrs();
  });

  jQuery('#cancel-query').click(function() {
    cancelQuery();
    hideLoader();
  });

  jQuery('#filter-results-summary-container').click(function() {
    jQuery('#filter-results-summary').toggle();
  });

  /*
    Close  buttons : modal windows
  */
  jQuery('#tr-details-close-btn').click(function() {
    removeTr();
    jQuery('.traceroutes.modal').modal('hide');
  });

  jQuery('#settings-details-close-btn').click(function() {
    removeTr();
    jQuery('.settings.modal').modal('hide');
  });

  jQuery('#flagging-close-btn').click(function() {
    removeTr();
    jQuery('.flagging.modal').modal('hide');
  });

  jQuery('#carrier-close-btn').click(function() {
    removeTr();
    jQuery('.carrier.modal').modal('hide');
  });

  jQuery('#opening-close-btn').click(function() {
    removeTr();
    jQuery('.opening.modal').modal('hide');
  });

  jQuery('#map-help-close-btn').click(function() {
    jQuery('.map-help.modal').modal('hide');
  });


  /////

  /*jQuery('.map-icon-close-btn').click(function() {
    jQuery('.map-icon-popup-container').hide();
  });*/

  //**************** LAYERS ****************//



  //****************** UI ******************//
  // the docs for semantic ui are pretty confusing - surprised I need to handroll this...
  jQuery('.top.menu .item').on('click', function() {
    jQuery('.active').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.tab').hide();
    jQuery('#'+jQuery(this).attr('id')+'-container').show();
  });
  jQuery('.as-link').on('click', function() {
    jQuery('.active').removeClass('active');
    jQuery('#as-tab').addClass('active');
    jQuery('.tab').hide();
    jQuery('#as-tab-container').show();
  });

  jQuery('table').tablesorter({});
  jQuery('.ui.rating').rating('disable');

  jQuery('#settings-modal').click(function(){
    jQuery('.settings.modal').modal('show');
  });
  jQuery('#traceroutes-modal').click(function(){
    jQuery('.traceroutes.modal').modal('show');
  });
  jQuery('#router-modal').click(function(){
    jQuery('.router.modal').modal('show');
  });
  jQuery('#carrier-modal').click(function(){
    jQuery('.carrier.modal').modal('show');
  });
  jQuery('#opening-modal').click(function(){
    jQuery('#opening-modal-div').modal('show');
    jQuery('.opening.modal').modal('show');
  });
  jQuery('#flagging-modal').click(function(){
    jQuery('#flagging-modal-div').modal('show');
    jQuery('.flagging.modal').modal('show');
  });

  jQuery('a.from.basic-srch-itm')
    .popup({
      popup: '.from.popup',
      inline: true,
      on: 'click',
    })
  ;
  jQuery('.basic-srch-itm.via')
    .popup({
      popup: '.via.popup',
      inline: true,
      on: 'click',
    })
  ;
  jQuery('.basic-srch-itm.to')
    .popup({
      popup: '.to.popup',
      inline: true,
      on: 'click',
    })
  ;
  jQuery('.ui.sidebar')
    .sidebar({
      context : jQuery('.map-holder'),
      dimPage : false,
      closable : false // If this is set to true (the default value) clicking anywhere else on the page will close the overlay. Remove this line if that behaviour is desired.
    })
    .sidebar('setting', 'transition', 'overlay', 'toggle')
    .sidebar('attach events', '.map-holder .layers-toggle .toggle.button');
  jQuery('.ui.accordion')
    .accordion();
  jQuery('.toggle.button')
    .state({
    });
};

/*TODO: Render tr results table and add event listeners*/
var renderTrResultTable = function(data) {

};

var showLoader = function() {
  jQuery('#loader').show();
};

var hideLoader = function() {
  jQuery('#loader').hide();
};

var cancelQuery = function() {
  if(ajaxObj && ajaxObj.readystate != 4){
      ajaxObj.abort();
      console.log("Query submission has been canceled.");
  }
};

var setTableSorters = function(){
  console.log('Sorting TR Tables');
  jQuery('#traceroutes-table').tablesorter( {sortList: [[0,2]]} );
};

var loadAutocompleteData = function(type) {
  var obj = {
    action: 'loadAutoCompleteData',
    field: type,
    keyword: ' '    // not sure why we need this, but leaving in for now
  };

  jQuery.ajax(url_base + '/application/controller/autocomplete.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Autocomplete data loaded: "+type);
      var data = jQuery.parseJSON(e);
      // remove falsey values like null (jqueryui autocomplete chokes on them)
      autocompletes[type] = _.reject(data, _.isNull);
      // bind the basic search
      bindAutocomplete(jQuery('.bs-input[data-constraint="'+type+'"]'), type);
      // bind the creepy modal
      if (type === "country") {
        bindAutocomplete(jQuery('.userloc-country'), type);
      }
      if (type === "city") {
        bindAutocomplete(jQuery('.userloc-city'), type);
      }
    },
    error: function (e) {
      console.error("Autocomplete data can't be loaded", e);
    }
  });
};

var bindAutocomplete = function(el, type) {
  if (autocompletes[type]) {
    jQuery(el).autocomplete({
      source: autocompletes[type]
    });
  } else {
    console.log("Cannot bind autocomplete data")
  }
};

