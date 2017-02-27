// generic js related to map.php goes here

// MAIN FUNCTIONS
var init = function() {
  setUpGMaps();
  setUpClickHandlers();
  createASRow("first");
};

var setUpClickHandlers = function() {
  // quick search buttons
  $('#search-header .qs-last-contributed-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-via-nsa-city-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-via-boomerangs-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-from-my-isp-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-from-my-cty-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });
  $('#search-header .qs-from-my-country-btn').click(function() {
    console.log('Clicked on' + $(this).attr("class"));
  });

  // basic search button
  $('#bs-submit-btn').click(function() {
    constructBS();
  });

  // advanced search buttons
  $('#as-submit-btn').click(function() {
    constructAS();
  });
  $('#as-clear-btn').click(function() {
    $('.advanced.input-holder').remove();
    createASRow("first");
  })

  // UI click events
  $('.top.menu .item').tab();
  $("table").tablesorter({});
  $('.ui.rating').rating('disable');

  $("#settings-modal").click(function(){
    $('.settings.modal').modal('show');
  });

  $("#traceroutes-modal").click(function(){
    $('.traceroutes.modal').modal('show');
  });

  $("#router-modal").click(function(){
    $('.router.modal').modal('show');
  });

  $("#carrier-modal").click(function(){
    $('.carrier.modal').modal('show');
  });

  $('a.from.basic-srch-itm')
    .popup({
      popup: '.from.popup',
      inline: true,
      on: 'click',
    })
  ;
  $('.basic-srch-itm.via')
    .popup({
      popup: '.via.popup',
      inline: true,
      on: 'click',
    })
  ;
  $('.basic-srch-itm.to')
    .popup({
      popup: '.to.popup',
      inline: true,
      on: 'click',
    })
  ;
  $('.ui.sidebar')
    .sidebar({
      context : $('.map-holder'),
      dimPage : false,
      closable : false // If this is set to true (the default value) clicking anywhere else on the page will close the overlay. Remove this line if that behaviour is desired.
    })
    .sidebar('setting', 'transition', 'overlay', 'toggle')
    .sidebar('attach events', '.map-holder .layers-toggle .toggle.button')
  ;
  $('.ui.accordion')
    .accordion()
  ;
  $('.toggle.button')
    .state({
    })
  ;
};