// generic js related to map.php goes here

// MAIN FUNCTIONS
var init = function() {
  setUpGMaps();
  setUpClickHandlers();

  getLayers(); // TODO: need to fix/agree on json structure
  populateLayersContainer(); /* TODO: move this after loading layers data */

  getPrivacyReport();

  if (initMode==0) {
    //jQuery('.settings.modal').modal('show'); // open user location modal

  } else if (initMode==1) { // trId is passed to map page
    //submitCustomQuery(trIdFilter);

  } else if (initMode==2) { // search filters are passed to map page
    //processPostedData(postedData);
  }

  createASRow("first"); // TODO: fix depending on initMode

  /*
    TODO: move this to an independent function 
    Set user location and isp info
  */
  jQuery('.userloc-ip').text(myIp);
  jQuery('.userloc-city').val(myCity);
  jQuery('.userloc-country').val(myCountry);
  jQuery('.userloc-isp').text(myISP);
  jQuery('.userloc-asn').text(myASN);

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

};

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
    constructFromMyISP();
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

  jQuery('#tr-details-close-btn').click(function() {
    jQuery('#tr-details').hide();
    removeTr();
  });

  jQuery('.map-icon-close-btn').click(function() {
    jQuery('.map-icon-popup-container').hide();
  });

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
