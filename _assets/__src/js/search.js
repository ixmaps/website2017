// stuff related to generating queries goes here

// this should be moved somewhere eventually - either config or the backend
// I really prefer being explicit here, giving them keys (boolean, position, kind, etc) instead of 'constraint1', 'constraint2', etc. I'm hoping we can adjust the backend to agree.
// use _.keys(constraints) to get the array of keys (boolean, position, kind, etc)
// I'm open to adjusting this, basically to include the keys inside the objects (constraints becomes an array of objects)
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
};

var constructFromMyISP = function() {

};

var constructFromMyCity = function() {

};

var constructFromMyCountry = function() {

};

var constructBS = function() {
  var submission = {};
  var i = 1;

  // iterate over all of the 'from' conditions
  $('#bs-originate-popup .bs-input').each(function(index, el) {
    if ($(el).val() != "") {
      var origObj = {
        constraint1: "does",
        constraint2: "originate",
        constraint3: $(el).data('constraint'),
        constraint4: $(el).val(),
        constraint5: "AND"
      };
      submission["filter-constraint-"+i] = origObj;
      i++;
    }
  });
  // iterate over all of the 'via' conditions
  $('#bs-via-popup .bs-input').each(function(index, el) {
    if ($(el).val() != "") {
      var origObj = {
        constraint1: "does",
        constraint2: "goVia",
        constraint3: $(el).data('constraint'),
        constraint4: $(el).val(),
        constraint5: "AND"
      };
      submission["filter-constraint-"+i] = origObj;
      i++;
    }
  });
  // iterate over all of the 'to' conditions
  $('#bs-terminate-popup .bs-input').each(function(index, el) {
    if ($(el).val() != "") {
      var origObj = {
        constraint1: "does",
        constraint2: "terminate",
        constraint3: $(el).data('constraint'),
        constraint4: $(el).val(),
        constraint5: "AND"
      };
      submission["filter-constraint-"+i] = origObj;
      i++;
    }
  });

  if (!_.isEmpty(submission)) {
    submitQuery(submission);
  } else {
    $().toastmessage('showErrorToast', 'Please fill in at least one search term field to query the database.');
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
    $().toastmessage('showErrorToast', "One or more fields were not filled. Submission canceled.");
  }
};

var createASRow = function(row) {
  var inputHolderEl = $('<div/>');
  inputHolderEl.addClass('advanced input-holder');

  // go over each constraint
  _.each(constraints, function(con) {
    var constraintEl = $('<div/>');
    constraintEl.addClass('advanced-input constraint-container constraint-'+con.name);
    jQuery(constraintEl).data('constraint', con.name);
    $(inputHolderEl).append(constraintEl);

    // go over the options in each constraint (input is special case)
    if (con.name === "input") {
      var divEl = '<div class="ui fluid input"><input class="constraint-value" type="text" placeholder="Hostname"></div>';
      $(constraintEl).append(divEl);
    } else {
      var selectEl = $('<select/>');
      selectEl.addClass('constraint-value ui fluid dropdown');
      _.each(con.options, function(opt) {
        selectEl.append(new Option(opt.display, opt.value, true, true));
      });
      $(constraintEl).append(selectEl);
    }
  });

  // append either a + or a - button
  var controlsEl = $('<div/>');
  controlsEl.addClass('advanced-input constraint-buttons');
  var buttonEl = $('<button/>');
  buttonEl.addClass('circular ui icon button');
  if (row === "first") {
    // add button
    $(buttonEl).append('<i class="create-search-row-btn icon settings"><img src="_assets/img/icn-add.svg" alt="add"></i>');
    $(buttonEl).click(function() {
      createASRow();
    });
  } else {
    // remove button
    $(buttonEl).append('<i class="destroy-search-row-btn icon settings"><img src="_assets/img/icn-remove.svg" alt="remove"></i>');
    $(buttonEl).click(function() {
      $(inputHolderEl).remove();
    });
  }
  $(controlsEl).append(buttonEl);
  $(inputHolderEl).append(controlsEl);

  $('#as-search-container').append(inputHolderEl);
};

var submitQuery = function(queryObj) {
  console.log('Submitting query of ' + JSON.stringify(queryObj));
}