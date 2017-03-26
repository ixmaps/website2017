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
    jQuery('.sidebar.vertical.legend').addClass('overlay visible animating');

  } else if (initMode==1) { // trId is passed to map page
    submitCustomQuery(trIdFilter);

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
      console.log("getMyLocation data loaded ");
      // populate js auto-complete array(s)
      var data = jQuery.parseJSON(e);
      //console.log(data);
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
  myCountryName = data.myCountryName;
  myIsp = data.myIsp;
  myAsn = data.myAsn;
  myLat = data.myLat;
  myLong = data.myLong;

  /* Key vars are sotred in userLocQueryOptions:
    still a work on progress...
    Global vars will be moved here
  */
  resetUserLocQueryOptions(); //!!

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

  /* set behaviour for on change usr loc fields*/

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

  /*
    Close  buttons : modal windows
  */
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
    console.log("Cannot bind autocomplete data");
  }
};

var populateTooltips = function() {
  _.each(tooltips, function(obj) {
    jQuery(obj.element).attr('title', obj.text);
  });
};

var tooltips = [
  {
    "element": "#qs-tab",
    "text": "Several predefined searches"
  },
  {
    "element": "#bs-tab",
    "text": "Search on basic traceroute parameters: From, Via, and To"
  },
  {
    "element": "#as-tab",
    "text": "Multiple options for flexibly composing search queries"
  },
  {
    "element": ".map-settings-button",
    "text": "Adjust how routes are are mapped. e.g. Keep routes visible when adding others.  Takes effect following the next search"
  },
  {
    "element": "#add-all-trs-btn",
    "text": "Display all the routes in the current sample of routes below. To see them overlaid, turn on Multiple routes in Settings"
  },
  {
    "element": "#remove-all-trs-btn",
    "text": "Remove all currently displayed routes"
  },
  {
    "element": "#carrier-table .carrier",
    "text": "Click on the carrier name to show more details about its rating on each 10 criteria star criteria"
  },
  {
    "element": "#carrier-table .star-col",
    "text": "Aggregate star score out of 10 maximum"
  },
  {
    "element": "#bs-submit-btn",
    "text": "Initiate search for routes that match all conditions specified in the FROM, VIA and TO boxes"
  },
  {
    "element": "#bs-tab-container .from",
    "text": "Specify search conditions for the origin of traceroutes e.g. From> ISP: Bell"
  },
  {
    "element": "#bs-tab-container .via",
    "text": "Specify search conditions for intermediate traceroute hops e.g. Via> Country: US"
  },
  {
    "element": "#bs-tab-container .to",
    "text": "Specify search conditions for intended destination or termination of traceroute e.g. To> Website: CBC.ca"
  },
  {
    "element": ".qs-last-contributed-btn",
    "text": "Finds the 20 most recently contributed traceroutes"
  },
  {
    "element": ".qs-via-nsa-city-btn",
    "text": "Finds all routes that pass through at least one of the 18 US cities strongly suspected of hosting NSA interception facilities. This search takes longer than usual due to the number search items. For more, see Learn/Issues"
  },
  {
    "element": ".qs-via-boomerangs-btn",
    "text": "Finds all routes that originate in Canada but pass through the US before returning home. For more, see Learn/Issues"
  },
  {
    "element": ".qs-from-my-isp-btn",
    "text": "Finds all routes that originate with your current ISP"
  },
  {
    "element": ".qs-from-my-cty-btn",
    "text": "Finds all routes that originate from your current city"
  },
  {
    "element": ".qs-from-my-country-btn",
    "text": "Finds all routes that originate from your current country"
  },
  {
    "element": "#map-allow-multiple",
    "text": "Displaying a route doesn't remove previously displayed routes"
  },
  {
    "element": "#map-allow-recenter",
    "text": "Map is recentred according to the most recently displayed route"
  },
  {
    "element": "#map-show-hops",
    "text": "Displays dots for routers, colour-coded for ISP"
  },
  {
    "element": "#map-show-routers",
    "text": "Displays lines for hops, with same colour as the originating router"
  },
  {
    "element": "#map-show-marker-origin",
    "text": "Displays a green marker at location of first router displayed in route"
  },
  {
    "element": "#map-exclude-a",
    "text": "Excludes routers assigned the impossible location of latitude=0 and longtitude = 0 (i.e. on the equator in the Atlantic Ocean)"
  },
  {
    "element": "#map-exclude-b",
    "text": "Excludes routers assigned the impossible location of the geographic centre of Canada and the US. Generic locations for other countries will be displayed, often in lakes or wilderness areas near the geographic centre"
  },
  {
    "element": "#map-exclude-d",
    "text": "Excludes routers for which an ASN (ie carrier) has not been assigned"
  },
  {
    "element": "#map-exclude-e",
    "text": "Excludes routers that a user has flagged as inaccurately located, and not yet corrected by IXmaps"
  },
  {
    "element": "#filter-results-content .header-results",
    "text": "The total number of traceroutes found that meet the criteria of the latest search"
  },
  {
    "element": ".traceroutes-results",
    "text": "Listed below are a selection of the traceroutes found. To map them, click on the traceroute number (TR ID)"
  },
  {
    "element": "",
    "text": ""
  },
  {
    "element": "",
    "text": ""
  },
  {
    "element": "",
    "text": ""
  }
]
