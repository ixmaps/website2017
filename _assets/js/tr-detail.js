jQuery(document).ready(function() {
  addFlagIpLinks();
});

var addFlagIpLinks = function() {
  // get number of routers
  var totR = jQuery('table:eq(1) tr').length;

  // add flagging column
  jQuery("table:eq(1) tr:first").append("<th width='90px'><a href=''>Flag</a></th>");

  // get trId from table - lawl, Anto, this is classic
  var trId = jQuery('table:eq(0) tr:eq(0) td:eq(1)').html();
  trId = trId.replace(' <a href="./ge-render.cgi?traceroute_id=', '');
  trId = trId.replace('"></a>', '');
  //trId = trId.replace(/[\r\n]/g, "");

  // get ip value for each row and add flag link on last column
  for (var i=0;i<totR;i++)
  {
    if (i>0){
      var ip = jQuery('table:eq(1) tr:eq('+i+') td:eq(1)').html();
      var hopN = jQuery('table:eq(1) tr:eq('+i+') td:eq(0)').html();
      jQuery("table:eq(1) tr:eq("+i+")").append('<td><a class="text-new" href="javascript:showFlagsParent('+trId+','+hopN+','+'\''+ip+'\''+',true'+')">Flag This IP</a></td>');
    }

    if (i%2 == 0) {
      jQuery("table:eq(1) tr:eq("+i+")").css('background-color','#E8E8E8');
    }
  }

  // setting styles here since, it's *way* easier than doing it in the python
  var tableEl = jQuery('table:eq(1)')
  var headerRow = jQuery('table:eq(1) tr:first');
  var allCells = jQuery('table:eq(1) tr td');

  tableEl.css('width','99%');
  tableEl.css('margin-right','15px');
  tableEl.css('border','1px solid black');
  allCells.css('padding','2px 5px 1px 5px');
}

var showFlagsParent = function (trId, hopN, ip, openFlagWin){
  parent.showFlags(trId, hopN, ip, openFlagWin);
  parent.jQuery('.flagging.modal').modal('show');

}