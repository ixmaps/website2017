var getDbStats = function() {
  console.log("Loading getDbStats");

  // var obj = {
  //   action: 'getDbStats'
  // };

  // jQuery.ajax(url_base + '/application/controller/db_stats.php', {
  //   type: 'post',
  //   data: obj,
  //   success: function (e) {
  //     console.log("Ok! getDbStats");
  //     var data = jQuery.parseJSON(e);
  //     renderDbStats(data);
  //   },
  //   error: function (e) {
  //     console.log("Error! getDbStats", e);
  //   }
  // });

  // TODO: change me back!
  var data = {
    "submitters": 702,
    "destinations": 4546,
    "traceroutes": 182847,
    "latest_contribution": "29 Mar 2017"
  }
  renderDbStats(data);
};

var renderDbStats = function(data) {
  jQuery('#contributors-stat').html(data.submitters);
  jQuery('#destinations-stat').html(data.destinations);
  jQuery('#traceroutes-stat').html(data.traceroutes);
  jQuery('#latest-tr-stat').html(data.latest_contribution);
};