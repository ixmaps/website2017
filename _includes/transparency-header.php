<?php include($_SERVER['DOCUMENT_ROOT'].'/_includes/transparency-reports.php'); ?>

<header class="transparency-intro">
    <div class="content">
        <img class="ui centered image" src="/_assets/img/transparency/hero-banner.png" alt="Keeping Internet Users in the Know or in the Dark: Data Privacy Transparncy of Canadian Internet Service Providers" />
        <div class="ui basic buttons padded">
            <?php foreach ($reports as $report_id => $report_details) : ?>
              <a class="report-year ui inverted large yellow button" data-report-name="<?php echo $report_id; ?>" href="<?php echo $report_details['link']; ?>">
                <?php echo $report_details['title']; ?>
              </a>
            <?php endforeach; ?>
        </div>
    </div>
</header>

<script type="text/javascript">
// Blarg. Someone else with better php knowledge can take a look if they want
  $('.report-year[data-report-name="'+$('body').data('name')+'"]').addClass('active');
</script>