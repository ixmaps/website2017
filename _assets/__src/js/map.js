// generic js related to map.php goes here

/* Gloal Vars for my location: now populated via ajax call */
/* TODO: add this to a js object: check all uses of these global vars */
var myIp = '';
var myCity = '';
var myCountry = '';
var myCountryName = '';
var myIsp = '';
var myAsn = '';
var myLat = '';
var myLong = '';

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
    jQuery('.sidebar.vertical.legend').addClass('overlay visible animating');

  } else if (initMode==1) { // trId is passed to map page
    submitUrlTrId(trIdFilter);

  } else if (initMode==2) { // search filters are passed to map page
    processPostedData(postedData);
  }

  createASRow("first"); // TODO: fix depending on initMode
  //jQuery(".constraint-value.dropdown").prop("selectedIndex", 0); // set default values of first ASRow

  setUpClickHandlers();
  _.each(autocompletes, function(key, value) {
    loadAutocompleteData(value);
  });
  // bind the NSA bandaid solution
  autocompletes.nsa = ["yes","no"];
  bindAutocomplete(jQuery('.bs-input[data-constraint="NSA"]'), "nsa");

  populateTooltips();
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
      console.log("getMyLocation data loaded");
      // populate js auto-complete array(s)
      var data = jQuery.parseJSON(e);

      if (data.defaultValue == true) {
        // we don't know the user's IP, so we hide the modal
        jQuery('.opening.modal').modal('hide');
      } else {
        setMyLocationData(data);  
      }
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
  myCountryName = data.myCountryName;
  myIsp = data.myIsp;
  myAsn = data.myAsn;
  myLat = data.myLat;
  myLong = data.myLong;

  /* Key vars are sorted in userLocQueryOptions:
    still a work on progress...
    Global vars will be moved here
  */
  resetUserLocQueryOptions(); //!!

  // unbind the click event to prevent users from clicking through before search is completed
  jQuery('#myloc-submit-btn').unbind('click');
  // create the initial query for opening modal
  buildTrCountQuery('first');
}

var setUpClickHandlers = function() {
  //**************** SEARCH ****************//
  // quick search buttons
  jQuery('#search-header .qs-last-contributed-btn').click(function() {
    constructLastContributed();
  });
  jQuery('#search-header .qs-via-nsa-city-btn').click(function() {
    constructViaNSACity();
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
  jQuery('#myloc-skip-btn').click(function() {
    jQuery('.opening.modal').modal('hide');
  });
  jQuery('#myloc-contribute-btn').click(function() {
    jQuery('.opening.modal').modal('hide');
    window.location = "/contribute.php";
  });
  /* for testing only */
  jQuery('#myloc-reload-btn').click(function() {
    jQuery('#myloc-reload-btn').removeClass('blue');
    jQuery('#myloc-submit-btn').unbind('click');
    buildTrCountQuery('');
  });


  /* Map Settings button */
  jQuery('.map-settings-button').click(function() {
    jQuery('.settings.modal').modal('show');
  });

  /* Map help button */
  jQuery('#map-help-btn').click(function() {
    jQuery('.map-help.modal').modal('show');
  });

  /* TR Details */
  jQuery('.more-details-btn').click(function(ev) {
    if (jQuery('.traceroute-container-more-details').hasClass('hidden')) {
      jQuery('.traceroute-container').addClass('hidden');
      jQuery('.traceroute-container-more-details').removeClass('hidden');
      jQuery('.more-details').removeClass('hidden');
      jQuery('.more-details-btn').text("Less details...");  
    } else {
      jQuery('.traceroute-container').removeClass('hidden');
      jQuery('.traceroute-container-more-details').addClass('hidden');
      jQuery('.more-details').addClass('hidden');
      jQuery('.more-details-btn').text("More details...");  
    }
  });

  /* set behaviour for on change usr loc fields */
  jQuery( ".userloc-submitter" ).change(function() {
    jQuery('#myloc-reload-btn').addClass('blue');
  });

  jQuery( ".userloc-city" ).change(function() {
    jQuery('#myloc-reload-btn').addClass('blue');
  });

  jQuery( ".user-loc-chkbox" ).change(function() {
    jQuery('#myloc-reload-btn').addClass('blue');
  });

  jQuery( ".userloc-city .userloc-submitter" ).focus(function() {
    jQuery('#myloc-reload-btn').addClass('blue');
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

  jQuery('#tr-details-close-btn').click(function() {
    removeTr();
    jQuery('.traceroutes.modal').modal('hide');
  });

  jQuery('#settings-close-btn').click(function() {
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
  if (ajaxObj && ajaxObj.readystate != 4) {
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
      var data = jQuery.parseJSON(e);
      // remove falsey values like null (jqueryui autocomplete chokes on them)
      autocompletes[type] = _.reject(data, _.isNull);
      // bind the basic search
      bindAutocomplete(jQuery('.bs-input[data-constraint="'+type+'"]'), type);
      // bind the opening modal
      if (type === "submitter") {
        bindAutocomplete(jQuery('.userloc-submitter'), type);
        bindAutocomplete(jQuery('.constraint-input input'), type);
      }
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
    console.log("No autocomplete data for this type, unbinding...");
    jQuery(el).autocomplete({
      source: []
    });
  }
};

var populateTooltips = function() {
  _.each(tooltips, function(obj) {
    jQuery(obj.element).attr('title', obj.text);
  });
};
