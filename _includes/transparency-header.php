<?php
  $active_report = basename($_SERVER['SCRIPT_NAME'], '.php');

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

            <!--
            <a class="ui inverted large yellow button <?php if($active_report == '2014-report'){ echo 'active'; } ?>" href="/transparency/2014-report.php">2014 Report</a>
            <a class="ui inverted large yellow button <?php if($active_report == '2013-report'){ echo 'active'; } ?>" href="/transparency/2013-report.php">2013 Report</a>
            -->
        </div>
    </div>
</header>