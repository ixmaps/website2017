// GLOBAL VARS
var config = null;
var requiredConfig = {
  gmaps: {
    key: 'string'
  },
  server_name: 'string'
};

// TODO: syncXMLHttpRequest issue stems from this - try jquery's getscript instead?
var loadConfig = function(configUrl) {
  var _this = this;
  $.ajax(
    {
      url: configUrl,
      dataType: 'json',
      async: false,
      cache: false,
      success: function(data) {
        _this.config = data;
      },
      error: function(xhr, code, error) {
        console.error("Couldn't load `"+configUrl+"`: ", code, error, xhr);
        alert("Couldn't load `"+configUrl+"` because:\n\n"+error+" ("+code+")");
      }
    }
  );
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