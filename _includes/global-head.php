<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="See how data travels the Internet">
<meta name="author" content="Faculty of Information, University of Toronto">

<!-- Styles -->
<link href="/_assets/css/styles.css" rel="stylesheet">
<link href="/_assets/__build/bower_components/jquery-toastmessage-plugin/src/main/resources/css/jquery.toastmessage.css" rel="stylesheet">
<link href="/_assets/__build/bower_components/jquery-ui/themes/base/jquery-ui.css" rel="stylesheet" />

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Work+Sans:500,700,900" rel="stylesheet">

<!-- Fav and touch icons -->
<link rel="apple-touch-icon" href="/favicon.png">
<link rel="shortcut icon" href="/favicon.png">

<!-- Scripts -->
<script src="/_assets/js/jquery.min.js"></script>
<!-- TODO: get this off the CDN - npm? how does grunt play here? -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js" type="text/javascript"></script>
<script src="/_assets/js/modernizr-custom.min.js"></script>
<script src="/_assets/js/semantic-ui.js"></script>
<script src="/_assets/__build/bower_components/jquery-toastmessage-plugin/src/main/javascript/jquery.toastmessage.js"></script>
<script src="/_assets/js/main.js"></script>

<!-- Matomo -->
<script type="text/javascript">
  loadConfig('/config.json')
  verifyConfig(config, requiredConfig);

  if (config.env == "prod") {
    var _paq = _paq || [];
    _paq.push(["setDomains", ["*.www.ixmaps.ca"]]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//dev.ixmaps.ca/piwik/";
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['setSiteId', 1]);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();
  }
</script>
<noscript><p><img src="//dev.ixmaps.ca/piwik/piwik.php?idsite=1" style="border:0;" alt="" /></p></noscript>
<!-- End Matomo Code -->