var getDbStats = function() {
  console.log("Loading getDbStats");

  // TODO: add a cronjob or similar on the server to reduce this to a simpler query
  var obj = {
    action: 'getDbStats'
  };

  jQuery.ajax(url_base + '/application/controller/db_stats.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Ok! getDbStats");
      var data = jQuery.parseJSON(e);
      renderDbStats(data);
    },
    error: function (e) {
      console.log("Error! getDbStats", e);
    }
  });

  // TODO: to reduce server (postgres) load for now
  // var data = {
  //   "submitters": 867,
  //   "destinations": 4682,
  //   "traceroutes": 324447,
  //   "latest_contribution": "04 Apr 2017"
  // }
  //renderDbStats(data);
};

var renderDbStats = function(data) {
  jQuery('#contributors-stat').html(data.submitters);
  jQuery('#destinations-stat').html(data.destinations);
  jQuery('#traceroutes-stat').html(data.traceroutes);
  jQuery('#latest-tr-stat').html(data.latest_contribution);
};