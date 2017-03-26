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
var loadedDefaultResult = false;

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
  jQuery('#qs-search-parameters-container').text('Does Contain City San Francisco AND Does Contain City Los Angeles OR...');
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
  //submitTrCount(submission);
  jQuery('#qs-search-parameters-container').text('Does Originate in Country CA AND Does Go via Country US AND Does Terminate in Country CA');
};

var constructFromMyIsp = function() {
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
      // adjust constraint2 for special cases e.g. submitter
      var constraint2_val = "";
      if(jQuery(el).data('constraint') == "submitter" ){
        constraint2_val = "contain";
      } else {
        constraint2_val = "originate";
      }

      var origObj = {
        constraint1: "does",
        constraint2: constraint2_val,
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
      var yesOrNo = jQuery(el).val();
      if (jQuery(el).data('constraint') === "NSA") {
        // TODO: this is a terrible bandaid because we didn't think through the design
        if (yesOrNo === "yes" || yesOrNo === "no") {
          var nsaCities = ["San Francisco", "Los Angeles", "New York", "Dallas", "Washington", "Ashburn", "Seattle", "San Jose", "San Diego", "Miami", "Boston", "Phoenix", "Salt Lake City", "Nashville", "Denver", "Saint Louis", "Bridgeton", "Bluffdale", "Houston", "Chicago", "Atlanta", "Portland"];

          _.each(nsaCities, function(city, index) {
            var nsaObj = {
              constraint1: "",
              constraint2: "contain",
              constraint3: "city",
              constraint4: city,
              constraint5: "OR"
            };

            if (yesOrNo === "yes") {
              nsaObj.constraint1 = "does"
            } else if (yesOrNo === "no") {
              nsaObj.constraint1 = "doesNot"
            } else {
              console.error('We shouldnt be able to get here')
            }
            // we need to switch the last condition to an AND if there are 'To' basic search criteria added (eg terminate Toronto)
            if (index+1 === nsaCities.length) {
              nsaObj.constraint5 = "AND"
            }
            submission["filter-constraint-"+i] = nsaObj;
            i++;
          });
        } else {
          jQuery().toastmessage('showErrorToast', 'When filling in the NSA field, please include either "yes" or "no"');
        }
      } else {
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
    }
  });
  // iterate over all of the 'to' conditions
  jQuery('#bs-terminate-popup .bs-input').each(function(index, el) {
    if (jQuery(el).val() != "") {

      var constraint2 = "";
      if(jQuery(el).data('constraint') == "destHostName" ){
        constraint2 = "contain";
      } else {
        constraint2 = "terminate";
      }

      var origObj = {
        constraint1: "does",
        constraint2: constraint2,
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
      var divEl = '<div class="ui fluid input"><input class="constraint-value" type="text" placeholder="Traceroute id"></div>';
      jQuery(constraintEl).append(divEl);
    } else {
      var selectEl = jQuery('<select/>');
      selectEl.addClass('constraint-value ui fluid dropdown');
      _.each(con.options, function(opt) {
        selectEl.append(new Option(opt.display, opt.value));
      });
      
      // select first child: default value
      // TODO: add default value in input (constraint) + add bindings for first child in selectEl
      selectEl.prop("selectedIndex", 0);''

      // set up the change listener
      if (con.name === "kind") {
        selectEl.change(function(ev) {
          var el = jQuery(this).parent().next().find('input');
          var value = jQuery(ev.target).val();
          // adjust the placeholder in the input field
          _.each(constraints[2].options, function(obj) {
            if (obj.value === value) {
              jQuery(el).attr('placeholder', obj.display);
            }
          });
          bindAutocomplete(el, value);
        });
      }

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
  jQuery('#filter-results-content').fadeOut('fast');
  jQuery('#filter-results-empty').show();

  ajaxObj = jQuery.ajax(url_base + '/application/controller/map.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Query submitted");
      if(e!=0){
        var data = jQuery.parseJSON(e);
        //console.log(data.trsTable);
        if (data.totTrs!=0 && data.result!=undefined){
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
          jQuery('#filter-results-empty').hide();
          jQuery('.sidebar.vertical.legend').removeClass('overlay animating visible');
          jQuery('#filter-results-content').fadeIn('fast');

        } else {

        // we may need more error messages, but for now this will handle the majority...
          hideLoader();
          jQuery.toast({
            text: '<span style="font-size: 20px;">No routes were found with the criteria you provided. Adjust the query options to be more inclusive, then click <b>Search</span>',
            hideAfter: 10000,
            allowToastClose: true,
            position: 'mid-center',
            icon: 'error',
          });


          /* Anto says: we should remove this; it's not intuitive for novice users*/
          // wait before loading
          setTimeout(function(){
            if(loadedDefaultResult){
              initializeMap();
              jQuery('#filter-results-content').fadeOut('fast');
              jQuery('#filter-results-empty').show();
            } else {
              constructLastContributed();
            }
          }, 10000);

        } // end if
      } // end success

    },
    error: function (e) {
      console.log("Error! Submission unsuccessful");
      //hideLoader();
    }
  });
};


/* User location query functions and vars */

var userLocQueryOptions = {};
var dataSearch = {};
var usrLocQuery = {};

var submitUserLocObject = function() {
  submitQuery(usrLocQuery);
  //submitLastSubmissionObject();
}

var resetUserLocQueryOptions = function() {
  console.log("resetUserLocQueryOptions()");
  userLocQueryOptions = {
    "submitter": {
      "value": "",
      "total":0,
      "checked": false,
    },
    "myAsn": {
      "value": "",
      "total":0,
      "checked": false,
    },

    "myCity": {
      "value": "",
      "total":0,
      "checked": false,
    },

    "myCountry": {
      "value": "",
      "total":0,
      "checked": false,
    }
  };

  // get data for user geo location
  userLocQueryOptions.myAsn.value = myAsn;
  userLocQueryOptions.myCountry.value = myCountry;
  userLocQueryOptions.myCity.value = myCity;

  // update ui fields
  jQuery('.userloc-ip').text(myIp);
  jQuery('.userloc-city').val(myCity);
  jQuery('.userloc-country').val(myCountry);
  jQuery('.userloc-country-name').html(myCountryName);
  jQuery('.userloc-country-flag').addClass(myCountry.toLowerCase());
  jQuery('.userloc-country-flag').addClass('flag');
  jQuery('.userloc-isp').text(myIsp);
  jQuery('.userloc-asn').text(myAsn);

}

var buildTrCountQuery = function(type) {
  console.log("buildTrCountQuery", type);

  resetUserLocQueryOptions(); // !!

  var obj;

  // first load query
  if(type=='first'){
    
    /*obj = {
      constraint1: "does",
      constraint2: "originate",
      constraint3: "country",
      constraint4: myCountry,
      constraint5: "AND"
    } 
    usrLocQuery['myCountry'] = obj;*/

    obj = {
      constraint1: "does",
      constraint2: "originate",
      constraint3: "asnum",
      constraint4: myAsn,
      constraint5: "AND"
    } 
    usrLocQuery['myAsn'] = obj;

    if(myCity!=""){
      obj = {
        constraint1: "does",
        constraint2: "originate",
        constraint3: "city",
        constraint4: myCity,
        constraint5: "AND"
      };
      usrLocQuery['myCity'] = obj;
    }

  // query dynamically created based on user selections in opening modal
  } else {

    usrLocQuery = {};

    var submitter = jQuery(".userloc-submitter").val();
    var myCityUsr = jQuery(".userloc-city").val();
    var myCountryUsr = jQuery(".userloc-country").val();

    if(jQuery(".userloc-asn-chkbox").is(":checked")){
      var obj = { 
          constraint1: "does",
          constraint2: "originate",
          constraint3: "asnum",
          constraint4: userLocQueryOptions.myAsn.value,
          constraint5: "AND"
      };
      usrLocQuery['myAsn'] = obj;
    }

    if(myCountryUsr != "" && jQuery(".userloc-country-chkbox").is(":checked")){
      var obj = { 
          constraint1: "does",
          constraint2: "originate",
          constraint3: "country",
          constraint4: myCountryUsr,
          constraint5: "AND"
      };
      usrLocQuery['myCountry'] = obj;
    }

    if(myCityUsr!="" && jQuery(".userloc-city-chkbox").is(":checked")){
      var obj = { 
          constraint1: "does",
          constraint2: "originate",
          constraint3: "city",
          constraint4: myCityUsr,
          constraint5: "AND"
      };
      usrLocQuery['myCity'] = obj;
    }

    if(submitter!="" && jQuery(".userloc-submitter-chkbox").is(":checked")){
      var obj = { 
          constraint1: "does",
          constraint2: "contain",
          constraint3: "submitter",
          constraint4: submitter,
          constraint5: "AND"
      };
      usrLocQuery['submitter'] = obj;
    }

  } // end if

  loadingUsrLocQuery();
  submitTrCount(usrLocQuery);  
}

/* count results for a submission constraint */
var submitTrCount = function(obj) {
//var submitQuery = function(obj) {

  console.log('submitTrCount...', obj);
  
  ajaxObj = jQuery.ajax(url_base + '/application/controller/map_search.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("submitTrCount OK", e);
      dataSearch = jQuery.parseJSON(e);
      console.log(dataSearch);
      renderTrCountData(dataSearch);
    },
    error: function (e) {
      console.log("Error! submitTrCount");
    
    }
  });
};


var renderTrCountData = function(data) {

  /*Check if the element is in the submitted query */
  if (typeof usrLocQuery.submitter != 'undefined'){
    userLocQueryOptions.submitter.total = data.results.submitter.total;
  }
  if (typeof usrLocQuery.myAsn != 'undefined'){
    userLocQueryOptions.myAsn.total = data.results.myAsn.total;
  }
  if (typeof usrLocQuery.myCity != 'undefined'){
    userLocQueryOptions.myCity.total = data.results.myCity.total;
  }
  if (typeof usrLocQuery.myCountry != 'undefined'){
    userLocQueryOptions.myCountry.total = data.results.myCountry.total;
  }  

  jQuery(".userloc-trs-tot").html(data.total); // !!

  jQuery(".userloc-submitter-tot").html(userLocQueryOptions.submitter.total);
  if(userLocQueryOptions.submitter.total != 0){
    jQuery(".userloc-submitter-chkbox").prop('checked', true);
    userLocQueryOptions.submitter.checked = true;
  }
  
  jQuery(".userloc-asn-tot").html(userLocQueryOptions.myAsn.total);
  if(userLocQueryOptions.myAsn.total != 0){
    jQuery(".userloc-asn-chkbox").prop('checked', true);
    userLocQueryOptions.myAsn.checked = true;
  }
  
  jQuery(".userloc-city-tot").html(userLocQueryOptions.myCity.total);
  if(userLocQueryOptions.myCity.total != 0){
    jQuery(".userloc-city-chkbox").prop('checked', true);
    userLocQueryOptions.myCity.checked = true;
  }

  jQuery(".userloc-country-tot").html(userLocQueryOptions.myCountry.total);
  if(userLocQueryOptions.myCountry.total != 0){
    jQuery(".userloc-country-chkbox").prop('checked', true);
    userLocQueryOptions.myCountry.checked = true;
  }

  /* TODO: add a link to show last contribution */
  if(data.total != 0){
    jQuery('#myloc-contribute-btn').removeClass('blue');
    jQuery('#myloc-submit-btn').addClass('blue');
  } else {
    jQuery('#myloc-submit-btn').removeClass('blue');
    jQuery('#myloc-contribute-btn').addClass('blue');
  }

}

var loadingUsrLocQuery = function() {
  var img = '<img width="20px" src="/_assets/img/icn-loading.gif"/>';
  //toggleLoadingUsrLocQuery('show');
  
  if (typeof usrLocQuery.submitter != 'undefined'){
    jQuery(".userloc-submitter-tot").html(img);  
  }
  if (typeof usrLocQuery.myAsn != 'undefined'){
    jQuery(".userloc-asn-tot").html(img);
  }

  if (typeof usrLocQuery.myCountry != 'undefined'){
    jQuery(".userloc-country-tot").html(img); 
  }
  if (typeof usrLocQuery.myCity != 'undefined'){
    jQuery(".userloc-city-tot").html(img);
  }
  
  jQuery(".userloc-trs-tot").html(img);
  jQuery('#myloc-submit-btn').removeClass('blue');
}

