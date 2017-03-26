// Temporary house for all of the shared data structures. These structures are used by js and to gen html, and should be a point of agreement btw front and back end. This should eventually be moved serverside


// I really prefer being explicit here, giving them keys (boolean, position, kind, etc) instead of 'constraint1', 'constraint2', etc. I'm hoping we can adjust the backend to agree.
// I'm open to adjusting this, basically moving the keys back outside the objects (constraints becomes an object of objects) and using _.keys(constraints) to get the array of keys (boolean, position, kind, etc) - would help with always tying value and display together - really these should never be referenced in the map-search.php or search.js
// this should likely be renamed to something a little more specific
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

/* Note: added "type" the old numeric id to render layers. TODO, remove this when the data structure is shared, replace with something more descriptive */
var layers = {
  "nsa": {
    "type": 1,
    "name": "NSA Internet Interception Site\/Suspected NSA Internet Inception Site",
    "active": false,
    "data": [],
    "location": "USA"
  },
  "ixp": {
    "type": 5,
    "name": "Public Internet Exchange Point (IXP)",
    "active": false,
    "data": [],
    "location": "Canada"
  },
  "ipt": {
    "type": 6,
    "name": "CIRA\/M\-Lab Internet Performance Test (IPT) Server",
    "active": false,
    "data": [],
    "location": "Canada"
  },
  "att": {
    "type": 7,
    "name": "AT\&T\/Fairview Suspected Surveillance Site",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "verizon": {
    "type": 8,
    "name": "Verizon\/Stormbrew Suspected Surveillance Site",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "google": {
    "type": 3,
    "name": "Google Data Centre",
    "active": false,
    "data": [],
    "location": "Worldwide"
  },
  "ch": {
    "type": 2,
    "name": "Carrier Hotel",
    "active": false,
    "data": [],
    "location": "USA and Canada"
  },
  "undersea": {
    "type": 4,
    "name": "Undersea Cable Landing Point",
    "active": false,
    "data": [],
    "location": "USA and Canada"
  }
}

// note: have removed Bluffdale and Bridgetown - make sure this object correctly represents them for eg layers
var nsaCities = ["San Francisco", "Los Angeles", "New York", "Dallas", "Washington", "Ashburn", "Seattle", "San Jose", "San Diego", "Miami", "Boston", "Phoenix", "Salt Lake City", "Nashville", "Denver", "Saint Louis", "Bridgeton", "Bluffdale", "Houston", "Chicago", "Atlanta", "Portland"];

var autocompletes = {
  "country": [],
  "region": [],
  "city": [],
  "zipCode": [],
  "ISP": [],
  "submitter": []
}

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
  }
]