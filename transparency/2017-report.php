<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Transparency | 2017 Report</title>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/_includes/global-head.php'); ?>

    <link rel="stylesheet" href="/_assets/css/transparency.css" type="text/css">
</head>

<body id="report-2017-page" data-name="2017-report">

<?php include($_SERVER['DOCUMENT_ROOT'].'/_includes/global-navigation.php'); ?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/_includes/transparency-header.php'); ?>

  <div class="content">

  <div class="ui blue message">
    <p><b>The 2017 transparency report is coming soon!</b><br>
    Below is a preview of our findings.</p>
  </div>

  <div class="ui hidden section divider"></div>

  <div class="wrapper">
      <h5 class="center">Select a Category to View Carrier Ratings</h5>

      <div class="ui hidden compact divider"></div>

      <ul class="tabs clearfix" data-tabgroup="first-tab-group">
          <li><a href="#tab1" class="active">Major Retailers</a></li>
          <li><a href="#tab2">Minor Retailers</a></li>
          <li><a href="#tab3">Transit Carriers</a></li>
      </ul>

      <section id="first-tab-group" class="tabgroup">
          <div id="tab1" style="display: block;">
              <img src="/_assets/img/transparency/startable-2017-major@2x.png">
          </div>
          <div id="tab2" style="display: none;">
              <img src="/_assets/img/transparency/startable-2017-minor@2x.png">
          </div>
          <div id="tab3" style="display: none;">
              <img src="/_assets/img/transparency/startable-2017-transit@2x.png">
          </div>
      </section>
  </div>

  <div class="ui divider"></div>

  </div>

<?php include '_includes/global-footer.php'; ?>

<script src="/_assets/js/smooth-scroll.js"></script>

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-24555700-1']);
  _gaq.push(['_setDomainName', 'none']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

<script>
  $(function() {
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
      e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();
    });
  });
</script>

</body>
</html>