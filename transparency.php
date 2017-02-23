<?php
  $active_report = '2014-report';

  $reports = array(
    '2014-report' => array(
      'link' => '/transparency/2014-report.php',
      'title' => '2014 Report'
    ),
    '2013-report' => array(
      'link' => '/transparency/2013-report.php',
      'title' => '2013 Report'
    )
  );
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>IXmaps</title>
    <?php include '_includes/global-head.php'; ?>
</head>

<body>


<?php include '_includes/global-navigation.php'; ?>

<header class="transparency-intro">
    <div class="content">
        <img class="ui centered image" src="/_assets/img/transparency/hero-banner.png" alt="Keeping Internet Users in the Know or in the Dark: Data Privacy Transparncy of Canadian Internet Service Providers" />
        <div class="ui hidden divider"></div>
        <div class="ui basic buttons">
            <?php foreach ($reports as $report_id => $report_details) : ?>
              <a class="ui inverted large yellow button <?php if($active_report == $report_id){ echo 'active'; } ?>" href="<?php echo $report_details['link']; ?>">
                <?php echo $report_details['title']; ?>
              </a>
            <?php endforeach; ?>
        </div>
    </div>
</header>

<?php include ('transparency/' . $active_report . '.php'); ?>

</body>
</html>