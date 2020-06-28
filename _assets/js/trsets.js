var getTrsets = function() {
  console.log("Loading Trsets");

  var obj = {
    action: 'getTrsetsAndTargets'
  };

  jQuery.ajax(config.url_base + '/application/controller/trsets.php', {
    type: 'post',
    data: JSON.stringify(obj),
    dataType: "json",
    success: function(data) {
      // trsetsData = jQuery.parseJSON(e);
      populateTrsetsContainer(data);
    },
    error: function(e) {
      console.log("Error! getTrsets", e);
    }
  });
};

var populateTrsetsContainer = function(trsetsData) {
  console.log(trsetsData);
  jQuery.each(trsetsData, function(i, t) {
    jQuery('#trset-container tbody').append(
      jQuery('<tr />').append(
        jQuery('<td />').text(t.name),
        jQuery('<td />').text(t.description),
        jQuery('<td />').text(t.trset_notes),
        jQuery('<td />').text(t.url),
        jQuery('<td />').text(t.category),
        jQuery('<td />').text(t.target_notes),
        jQuery('<td />').text(t.reachable == "t" ? "Yes" : "No")
      )
    );
  });

  jQuery('table').tablesort();
  jQuery('table').DataTable({
    "paging":   false,
    "ordering": false,
    "info":     false
  });
};