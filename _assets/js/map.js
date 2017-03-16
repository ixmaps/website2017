// generic js related to map.php goes here

/* Gloal Vars for my location: now populated via ajax call */
var myIp = '';
var myCity = '';
var myCountry = '';
var myIsp = '';
var myAsn = '';
var myLat = '';
var myLong = '';

// MAIN FUNCTIONS
var init = function() {
  getMyLocation();
  setUpGMaps();
  setUpClickHandlers();
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

  /*
    TODO: move this to an independent function 
    Load autocomplete data from db and populate js arrays
  */
  loadAutoCompleteData('country', ' ');
  loadAutoCompleteData('region', ' ');
  loadAutoCompleteData('city', ' ');
  loadAutoCompleteData('zipCode', ' ');
  loadAutoCompleteData('ISP', ' ');
  loadAutoCompleteData('submitter', ' ');

  firstLoad = false;

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
  // onclick events
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
    jQuery('.traceroutes.modal').modal('hide'); 
  });

  jQuery('#settings-close-btn').click(function() {
    jQuery('.settings.modal').modal('hide'); 
  });

  jQuery('#flagging-close-btn').click(function() {
    jQuery('.flagging.modal').modal('hide'); 
  });
  
  jQuery('#carrier-close-btn').click(function() {
    jQuery('.carrier.modal').modal('hide'); 
  });

  jQuery('#opening-close-btn').click(function() {
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
    .sidebar('attach events', '.map-holder .layers-toggle .toggle.button')
  ;
  jQuery('.ui.accordion')
    .accordion()
  ;
  jQuery('.toggle.button')
    .state({
    })
  ;
};

/*TODO: Render tr results table and add event listeners*/
var renderTrResultTable = function(data) {

};


var bindAutocompletes = function(tagType, rowId) {
  el = rowId + " .constraint-text-entry";
  if (tagType == 'country') {
    jQuery(el).autocomplete({
      source: countryTags
    });
  } else if (tagType == 'region') {
    jQuery(el).autocomplete({
      source: regionTags
    });
  } else if (tagType == 'city') {
    jQuery(el).autocomplete({
      source: cityTags
    });
  } else if (tagType == 'zipCode') {
    jQuery(el).autocomplete({
      source: zipCodeTags
    });
  } else if (tagType == 'ISP') {
    jQuery(el).autocomplete({
      source: ISPTags
    });
  } else if (tagType == 'asnum') {
    jQuery(el).autocomplete({
      source: ASnumTags
    });
  } else if (tagType == 'submitter') {
    jQuery(el).autocomplete({
      source: submitterTags
    });
  } else if (tagType == 'zipCodeSubmitter') {
    jQuery(el).autocomplete({
      source: zipCodeSubmitterTags
    });
  } else if (tagType == 'destHostName') {
    jQuery(el).autocomplete({
      source: destHostNameTags
    });
  } else if (tagType == 'ipAddr') {
    jQuery(el).autocomplete({
      source: ipAddressTags
    });
  } else if (tagType == 'hostName') {
    jQuery(el).autocomplete({
      source: hostNameTags
    });
  } else if (tagType == 'trId') {
    jQuery(el).autocomplete({
      source: trIdTags
    });
  } else {
    console.log('tagType is not currently implemented for autocomplete');
  }
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


var loadAutoCompleteData = function(type, value) {
  //console.log(type + ":" + value);
  var obj = {
    action: 'loadAutoCompleteData',
    field: type,
    keyword: value
  };

  jQuery.ajax(url_base + '/application/controller/autocomplete.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Autocomplete data loaded: "+type);
      // populate js auto-complete array(s)
      var data = jQuery.parseJSON(e);
      populateAutoCompleteArrays(type,data);
    },
    error: function (e) {
      console.log("Error! autocomplete data can't be loaded", e);
    }
  });

};

var populateAutoCompleteArrays = function(type, data){
  if(type=='country') {
    countryTags.length = 0;
    jQuery.each(data, function(key, value) {
      if(value != null){
        countryTags.push(value);
      }
    });

  } else if(type=='region') {
    regionTags.length = 0;
    jQuery.each(data, function(key, value) {
      if(value != null){
       regionTags.push(value);
      }
    });

  } else if(type=='city') {
    cityTags.length = 0;
    jQuery.each(data, function(key, value) {
      if(value != null){
       cityTags.push(value);
      }
    });

  } else if(type=='asnum') {
    ASnumTags.length = 0;
    jQuery.each(data, function(key, value) {
      if(value != null){
       ASnumTags.push(value);
      }
    });

  } else if(type=='zipCode') {
    zipCodeTags.length = 0;
    jQuery.each(data, function(key, value) {
      if(value != null){
       zipCodeTags.push(value);
      }
    });

  } else if(type=='ISP') {
    ISPTags.length = 0;
    jQuery.each(data, function(key, value) {
      if(value != null){
       ISPTags.push(value);
      }
  });

  } else if(type=='submitter') {
    submitterTags.length = 0;
    jQuery.each(data, function(key, value) {
      if(value != null){
       submitterTags.push(value);
      }
  });
  }

  if(firstLoad==true){
    firstLoadFunc();
  }
}