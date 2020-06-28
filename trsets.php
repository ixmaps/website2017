<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>TRsets | IXmaps</title>
    <?php include '_includes/global-head.php'; ?>

    <script src="https://semantic-ui.com/javascript/library/tablesort.js"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/dataTables.semanticui.min.js"></script>
    <script src="_assets/js/trsets.min.js" type="text/javascript"></script>
    <link href="https://cdn.datatables.net/1.10.21/css/dataTables.semanticui.min.css" rel="stylesheet">

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

<div class="content" style="max-width: none;">
    <div id="trset-container">
          <table class="ui tablesorter selectable table">
              <thead>
                  <tr>
                      <th class="sortable">TRset name<i></i></th>
                      <th class="sortable">TRset description<i></i></th>
                      <th class="sortable">TRset notes<i></i></th>
                      <th class="sortable">Target URL<i></i></th>
                      <th class="sortable">Target category<i></i></th>
                      <th class="sortable">Target notes<i></i></th>
                      <th class="sortable">Reachable<i></i></th>
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
