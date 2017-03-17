// stuff related to generating queries goes here

// this should be moved somewhere eventually - either config or the backend
// I really prefer being explicit here, giving them keys (boolean, position, kind, etc) instead of 'constraint1', 'constraint2', etc. I'm hoping we can adjust the backend to agree.
// I'm open to adjusting this, basically moving the keys back outside the objects (constraints becomes an object of objects) and using _.keys(constraints) to get the array of keys (boolean, position, kind, etc) - would help with always tying value and display together - really these should never be referenced in the map-search.php or search.js
// this should likely be renamed to something a little more specific

// GLOBALS

/*
  Define ajax object for query submit
  !! important
*/
var ajaxObj;

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

var constructLastContributed = function() {
  var submission = {
    "filter-constraint-1": {
      constraint1: "quickLink",
      constraint2: "lastSubmission"
    }
  };
  submitQuery(submission);
  jQuery('#qs-search-parameters-container').text('Last contributed traceroute');
};

var constructViaNSA = function() {
  // TODO: get this from the server in the future
  var nsaCities = ["San Francisco", "Los Angeles", "New York", "Dallas", "Washington", "Ashburn", "Seattle", "San Jose", "San Diego", "Miami", "Boston", "Phoenix", "Salt Lake City", "Nashville", "Denver", "Saint Louis", "Bridgeton", "Bluffdale", "Houston", "Chicago", "Atlanta", "Portland"];
  var submission = {};
  var i = 1;

  _.each(nsaCities, function(city) {
    var nsaObj = {
      constraint1: "does",
      constraint2: "contain",
      constraint3: "city",
      constraint4: city,
      constraint5: "OR"
    };
    submission["filter-constraint-"+i] = nsaObj;
    i++;
  });
  submitQuery(submission);
  jQuery('#qs-search-parameters-container').text('Does Contain City San Francisco AND Does Contain City Los Angeles AND...');
};

var constructBoomerangs = function() {
  var submission = {
    "filter-constraint-1": {
      constraint1: "does",
      constraint2: "originate",
      constraint3: "country",
      constraint4: "CA",
      constraint5: "AND"
    },
    "filter-constraint-2": {
      constraint1: "does",
      constraint2: "goVia",
      constraint3: "country",
      constraint4: "US",
      constraint5: "AND"
    },
    "filter-constraint-3": {
      constraint1: "does",
      constraint2: "terminate",
      constraint3: "country",
      constraint4: "CA",
      constraint5: "AND"
    },
  }
  submitQuery(submission);
  jQuery('#qs-search-parameters-container').text('Does Originate in Country CA AND Does Go via Country US AND Does Terminate in Country CA');
};

var constructFromMyISP = function() {
  if (myAsn) {
    var submission = {
      "filter-constraint-1": {
        constraint1: "does",
        constraint2: "originate",
        constraint3: "asnum",
        constraint4: myAsn,
        constraint5: "AND"
      }
    }
    submitQuery(submission);
    jQuery('#qs-search-parameters-container').text('Does Originate in AS number ' + myAsn);
  } else {
    jQuery().toastmessage('showErrorToast', 'We were unable to determine your ISP - please try a different query');
  }
};

var constructFromMyCity = function() {
  if (myCity) {
    var submission = {
      "filter-constraint-1": {
        constraint1: "does",
        constraint2: "originate",
        constraint3: "city",
        constraint4: myCity,
        constraint5: "AND"
      }
    }
    submitQuery(submission);
    jQuery('#qs-search-parameters-container').text('Does Originate in City ' + myCity);
  } else {
    jQuery().toastmessage('showErrorToast', 'We were unable to determine your city - please try a different query');
  }
};

var constructFromMyCountry = function() {
  if (myCountry) {
    var submission = {
      "filter-constraint-1": {
        constraint1: "does",
        constraint2: "originate",
        constraint3: "country",
        constraint4: myCountry,
        constraint5: "AND"
      }
    }
    submitQuery(submission);
    jQuery('#qs-search-parameters-container').text('Does Originate in Country ' + myCountry);
  } else {
    jQuery().toastmessage('showErrorToast', 'We were unable to determine your country - please try a different query');
  }
};

var constructBS = function() {
  var submission = {};
  var i = 1;

  // iterate over all of the 'from' conditions
  jQuery('#bs-originate-popup .bs-input').each(function(index, el) {
    if (jQuery(el).val() != "") {
      var origObj = {
        constraint1: "does",
        constraint2: "originate",
        constraint3: jQuery(el).data('constraint'),
        constraint4: jQuery(el).val(),
        constraint5: "AND"
      };
      submission["filter-constraint-"+i] = origObj;
      i++;
    }
  });
  // iterate over all of the 'via' conditions
  jQuery('#bs-via-popup .bs-input').each(function(index, el) {
    if (jQuery(el).val() != "") {
      var origObj = {
        constraint1: "does",
        constraint2: "goVia",
        constraint3: jQuery(el).data('constraint'),
        constraint4: jQuery(el).val(),
        constraint5: "AND"
      };
      submission["filter-constraint-"+i] = origObj;
      i++;
    }
  });
  // iterate over all of the 'to' conditions
  jQuery('#bs-terminate-popup .bs-input').each(function(index, el) {
    if (jQuery(el).val() != "") {
      var origObj = {
        constraint1: "does",
        constraint2: "terminate",
        constraint3: jQuery(el).data('constraint'),
        constraint4: jQuery(el).val(),
        constraint5: "AND"
      };
      submission["filter-constraint-"+i] = origObj;
      i++;
    }
  });

  if (!_.isEmpty(submission)) {
    submitQuery(submission);
  } else {
    jQuery().toastmessage('showErrorToast', 'Please fill in at least one search term field to query the database.');
  }
};

var constructAS = function() {
  var submission = {};
  var rowNum = 0;
  var errorCount = 0;

  // clear the error fields
  jQuery('.constraint').removeClass('blank-field-error');
  jQuery('#as-search-container .input-holder').each(function(index, row) {
    rowNum++;
    var constNum = 0;
    console.log(index, jQuery(row));
    var constraint = {};
    _.each(jQuery(row).children('.constraint-container'), function(c) {
      constNum++;
      var inputEl = jQuery(c).find('.constraint-value');
      if (jQuery(inputEl).val()) {
        constraint['constraint'+constNum] = inputEl.val();
      } else {
        // highlight unfilled fields
        errorCount++;
        jQuery(c).children().addClass('blank-field-error');
      }
    });
    // one line of filters
    submission["filter-constraint"+rowNum] = constraint;
  });

  // if there are no errors, submit
  if (errorCount === 0) {
    submitQuery(submission);
  } else {
    jQuery().toastmessage('showErrorToast', "One or more fields were not filled. Submission canceled.");
  }
};

var createASRow = function(row) {
  var inputHolderEl = jQuery('<div/>');
  inputHolderEl.addClass('advanced input-holder');

  // go over each constraint
  _.each(constraints, function(con) {
    var constraintEl = jQuery('<div/>');
    constraintEl.addClass('advanced-input constraint-container constraint-'+con.name);
    jQuery(constraintEl).data('constraint', con.name);
    jQuery(inputHolderEl).append(constraintEl);

    // go over the options in each constraint (input is special case)
    if (con.name === "input") {
      var divEl = '<div class="ui fluid input"><input class="constraint-value" type="text" placeholder="Hostname"></div>';
      jQuery(constraintEl).append(divEl);
    } else {
      var selectEl = jQuery('<select/>');
      selectEl.addClass('constraint-value ui fluid dropdown');
      _.each(con.options, function(opt) {
        selectEl.append(new Option(opt.display, opt.value, true, true));
      });
      jQuery(constraintEl).append(selectEl);
    }
  });

  // append either a + or a - button
  var controlsEl = jQuery('<div/>');
  controlsEl.addClass('advanced-input constraint-buttons');
  var buttonEl = jQuery('<button/>');
  buttonEl.addClass('circular ui icon button');
  if (row === "first") {
    // add button
    jQuery(buttonEl).append('<i class="create-search-row-btn icon settings"><img src="_assets/img/icn-add.svg" alt="add"></i>');
    jQuery(buttonEl).click(function() {
      createASRow();
    });
  } else {
    // remove button
    jQuery(buttonEl).append('<i class="destroy-search-row-btn icon settings"><img src="_assets/img/icn-remove.svg" alt="remove"></i>');
    jQuery(buttonEl).click(function() {
      jQuery(inputHolderEl).remove();
    });
  }
  jQuery(controlsEl).append(buttonEl);
  jQuery(inputHolderEl).append(controlsEl);

  jQuery('#as-search-container').append(inputHolderEl);
};

/*var submitQuery = function(queryObj) {
  console.log('Submitting query of ' + JSON.stringify(queryObj));
}*/


var submitCustomQuery = function(trId, multipleTRs) {
  jQuery('#userloc').hide();
  var singleTrJSON = {
      "filter-constraint-1":
      {
        constraint1: "does",
        constraint2: "contain",
        constraint3: "trId",
        constraint4: trId,
        constraint5: "AND"
      }
  };
  var jsonToString = JSON.stringify(singleTrJSON);
  //processPostedData(jsonToString);
  submitQuery(singleTrJSON);
}

/* submission for new map website */
var submitQuery = function(obj) {
  console.log('Submitting...', obj);
  showLoader();
  //jQuery('.results').fadeOut('fast');

  // jQuery('#map-canvas-container').hide();
  // jQuery('#map-container').hide();
  // jQuery('#filter-results').hide();
  //jQuery('#filter-results-log').html('');
  /*jQuery('#map-core-controls').hide();*/
  //showLoader();

  ajaxObj = jQuery.ajax(url_base + '/application/controller/map.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Query submitted");
      if(e!=0){
        var data = jQuery.parseJSON(e);
        //console.log(data.trsTable);
        if (data.totTrs!=0 && data.result!=undefined ){
          //xconsole.log("Result: ", data.result);
          ixMapsDataJson = jQuery.parseJSON(data.result);

          //jQuery('#tot-results').html(data.trsTable);

          jQuery('#traceroutes-results-table').html(data.trsTable);
          jQuery('#tot-results').html(data.totTrs);
          jQuery('#tot-results-found').html(data.totTrsFound);
          jQuery('#my-ip').html(myIp);

          console.log(" Total TRs: "+data.totTrs);
          console.log(" Total Hops: "+data.totHops);
          console.log(" Execution Time: "+data.execTime+' Sec.');
          jQuery('#filter-results-summary').html(data.querySummary);

          loadMapData();
          hideLoader();
          //jQuery('.results').fadeIn('fast');

        } else {

        // we may need more error messages, but for now this will handle the majority...
          hideLoader();
          jQuery.toast({
            heading: 'No routes found',
            text: 'No routes were found with specified criteria, returning last submitted route instead. Adjust the query options to be more inclusive, then click Submit to re-query.',
            hideAfter: 10000,
            allowToastClose: true,
            position: 'mid-center',
            icon: 'error',
          });

          // wait before loading
          setTimeout(function(){
            constructLastContributed();
          }, 10000);

        }
      }
/*
      /////////
      if (data.totTrs!=undefined){
        console.log(" Total TRs: "+data.totTrs);
        console.log(" Total Hops: "+data.totHops);
        console.log(" File Name: "+data.ixdata);
        console.log(" File Size: "+data.ixsize+' KB');
        console.log(" Execution Time: "+data.execTime+' Sec.');
        writeIxMapsJs(data.ixdata);
        jQuery('#map-canvas-container').show();
        jQuery('#map-container').show();
        jQuery('#filter-results').show();
        jQuery('#filter-results-log').show();
        //jQuery('#map-core-controls').show();
        jQuery('#filter-results').html(data.trsTable);
        jQuery('#filter-results-log').html(data.queryLogs);
        jQuery('#filter-results-summary').html(data.querySummary);
      } else {
        // we may need more error messages, but for now this will handle the majority...
        jQuery.toast({
          heading: 'No routes found',
          text: 'No routes were found with specified criteria, returning last submitted route instead. Adjust the query options to be more inclusive, then click Submit to re-query.',
          hideAfter: 10000,
          allowToastClose: true,
          position: 'mid-center',
          icon: 'error',
        });
        // DANGER! This could result in an endless loop if there is no last submitted
        submitLastSubmissionObject();
        jQuery('#filter-results-log').show();
        jQuery('#filter-results-log').html(data.queryLogs);
        jQuery('#filter-results-summary').html(data.querySummary);
      }
      hideLoader();
      ///////////
*/
    },
    error: function (e) {
      console.log("Error! Submission unsuccessful");
      //hideLoader();
    }
  });
};


var submitUserLocObject = function() {

  /* Check values if user has changed City and Country*/
  myCity = jQuery('.userloc-city').val();
  myCountry = jQuery('.userloc-country').val();

/*  Colin: not sure where are you going with this approach
  Commenting it for now */

/*  var userLocJSON = {
    "parameters":
    {
      "submitOnLoad": true,
      "submissionType": "customFilter",
      "otherFunction": ""
    },
    "constraints":
    {
      "filter-constraint-1":
      {
        constraint1: "does",
        constraint2: "originate",
        constraint3: "",
        constraint4: "",
        constraint5: "AND"
      }
    }
  };*/

  /* Criteria 1: the most inclusive contain my city and my country  */
  /*if (myCity!="" && myCountry!="") {
    console.log('Searching based on Country and City')*/

  if (myCity!="" && myCountry!="" && myAsn) {
    console.log('Searching based on ASN, Country, and City');

    userLocJSON = {
        "filter-constraint-1":
        {
          constraint1: "does",
          constraint2: "originate",
          constraint3: "country",
          constraint4: myCountry,
          constraint5: "AND"
        },
        "filter-constraint-2":
        {
          constraint1: "does",
          constraint2: "originate",
          constraint3: "city",
          constraint4: myCity,
          constraint5: "AND"
        },
        "filter-constraint-3":
        {
          constraint1: "does",
          constraint2: "originate",
          constraint3: "asnum",
          constraint4: myAsn,
          constraint5: "AND"
        }
    };
    submitQuery(userLocJSON);

  } else if (myCountry!="") {
    console.log('Searching based on Country');
    userLocJSON = {
        "filter-constraint-1":
        {
          constraint1: "does",
          constraint2: "contain",
          constraint3: "country",
          constraint4: myCountry,
          constraint5: "AND"
        }
    };
    submitQuery(userLocJSON);

  /*Alert: This can produce many irrelevant queries */
  } else if (myCity!="") {
    console.log('Searching based on city');
    userLocJSON = {
        "filter-constraint-1":
        {
          constraint1: "does",
          constraint2: "contain",
          constraint3: "city",
          constraint4: myCity,
          constraint5: "AND"
        }
    };
    submitQuery(userLocJSON);

  } else {
    console.log('Giving up, last submission instead of user geoloc');
    submitLastSubmissionObject();
  }
}

