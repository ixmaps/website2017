// GLOBAL VARS
var requiredConfig = {
  gmaps: {
    key: 'string'
  },
  server_name: 'string'
};

var verifyConfig = function(config, required, path) {
  var _this = this;
  var curPath = path || null;

  _.each(_.keys(required), function (req) {
    if (typeof required[req] == 'object') {
      _this.verifyConfig(config[req], required[req], (curPath ? curPath + "." : "") + req);
    } else {
      var err;
      if (!config) {
        err = "Missing configuration value for key '"+curPath+"'! Check your config.json";
      } else if (!config[req]) {
        err = "Missing configuration value for key '"+curPath+"."+req+"'! Check your config.json";
      } else if (typeof config[req] != required[req]) {
        err = "Configuration value for '"+req+"' must be a "+(typeof required[req])+" but is a "+(typeof config[req])+"! Check your config.json";
      }

      if (err) {
        console.error(err);
        throw err;
      }
    }
  });
};


(function($, window, document, undefined) {

	$(function() {
		// Toggle open and close nav styles on click (mobile nav)
		$('#nav-toggle').click(function() {
			$('.nav > .nav-list').slideToggle();
			$(this).toggleClass('active');
			return false;
		});

		// Dropdown menus for desktop and mobile
		$('.has-dropdown > a').click(function() {
			var $this = $(this);
			var $parent = $this.parent();
			var $dropdown = $this.next('.nav-dropdown');
			if ( $dropdown.is(':visible') ) {
				$dropdown.slideUp(function() {
					$parent.removeClass('show-dropdown');
				});
			} else {
				$parent.addClass('show-dropdown');
				$dropdown.slideDown();
			}
			return false;
		});

    // configure toast msgs
    $().toastmessage({
      stayTime: 5000,
      position: 'middle-center'
    });
	});

})(jQuery, window, document);

