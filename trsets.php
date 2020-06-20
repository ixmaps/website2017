<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>TRsets | IXmaps</title>
    <?php include '_includes/global-head.php'; ?>

    <script src="_assets/js/trsets.min.js" type="text/javascript"></script>
    <script>
        jQuery(document).ready(function() {
            getTrsets();
        });
    </script>
</head>

<body id="trsets-page">
<?php include '_includes/global-navigation.php'; ?>

<header class="hero">
    <div class="content">
        <h1>TRsets</h1>
    </div>
</header>

<div class="content">
    <div id="trset-list">
          <table class="ui table">
              <thead>
                  <tr>
                      <th>TRset name</th>
                      <th>TRset description</th>
                      <th>Target URL</th>
                      <th>Target category</th>
                      <th>Target reachable</th>
                  </tr>
              </thead>
              <tbody>
                  <!-- filled with trsets.js -->
              </tbody>
          </table>
    </div>
</div>

<?php include '_includes/global-footer.php'; ?>
</body>
</html>
