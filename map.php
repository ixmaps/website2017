<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Map | IXmaps</title>
    <?php include '_includes/global-head.php'; ?>

    <script src="_assets/js/tablesorter.min.js" type="text/javascript"></script>
    <script src="_assets/js/prototype.min.js" type="text/javascript"></script>
      <!-- we really need to decide on a process for where to put these -->
    <script type="text/javascript" src="_assets/__build/bower_components/jquery-ui/ui/minified/jquery.ui.core.min.js"></script>
    <script type="text/javascript" src="_assets/__build/bower_components/jquery-ui/ui/minified/jquery.ui.widget.min.js"></script>
    <script type="text/javascript" src="_assets/__build/bower_components/jquery-ui/ui/minified/jquery.ui.position.min.js"></script>
    <script type="text/javascript" src="_assets/__build/bower_components/jquery-ui/ui/minified/jquery.ui.menu.min.js"></script>
    <script type="text/javascript" src="_assets/__build/bower_components/jquery-ui/ui/minified/jquery.ui.autocomplete.min.js"></script>

    <!-- Production  -->
    <script src="_assets/js/map.min.js" type="text/javascript"></script>
    <script src="_assets/js/gmaps.min.js" type="text/javascript"></script>
    <script src="_assets/js/search.min.js" type="text/javascript"></script>
    <script src="_assets/js/layers.min.js" type="text/javascript"></script>
    <script src="_assets/js/jquery.toast.min.js" type="text/javascript"></script>
    <script src="_assets/js/data-structures.min.js" type="text/javascript"></script>

    <script>
        var initMode = 0;
        var trIdFilter = 0;

        jQuery(document).ready(function() {

            <?php
            if(isset($_GET['trid'])){
            ?>
            initMode = 1; // trId is passed to map page
            trIdFilter = <?php echo $_GET['trid']; ?>
            //submitCustomQuery(trIdFilter);
            <?php
            } else if($_GET && isset($_GET['data'])){
            ?>
            initMode = 2; // search filters are passed to map page
            var postedData = '<?php echo $_GET['data'];?>';
            //processPostedData(postedData);
            <?php
            } else {
            ?>

            <?php
            }
            ?>

            // !!
            init();
        });
    </script>

  <link href="_assets/css/jquery.toast.min.css" rel="stylesheet" />
  <link href="_assets/css/jquery.ui.autocomplete.css" rel="stylesheet" />

</head>

<body id="map-page">

    <?php include '_includes/global-navigation.php'; ?>

    <!-- SEARCH AREA -->
    <?php include '_includes/map-search.php'; ?>

    <!-- RESULTS AREA -->
    <div class="map-holder">
        <!-- LOADER MASK -->
        <div id="loader" style="display: none">
            <div id="loader-mask"></div>
            <div class="loader-image">
                <img width="100px" src="_assets/img/icn-loading.gif"/>
                <br/><br/>
                <div id="cancel-query-div">
                    <button id="cancel-query" class="ui massive centered blue button">Cancel</button>
                </div>
            </div>
        </div>

        <!-- LEGEND SIDEBAR -->
        <?php include '_includes/map-layers.php'; ?>

        <!-- RESULTS SIDEBAR -->
        <?php include '_includes/map-results.php'; ?>

        <!-- GOOGLE MAPS -->
        <div class="map-canvas pusher">
            <div class="layers-toggle">

                <button class="ui toggle button">
                    <!-- TODO: I believe this style came from semantic-ui's css. What is best practice for these types of overwrites -->
                    <i class="ui image left floated" style="margin-bottom: 0px">
                        <img src="/_assets/img/icn-layers.svg" alt="delete" />
                    </i>
                    <span id="num-active-layers">0 LAYERS</span>
                </button>
            </div>

            <div id="map"></div>
        </div>
    </div>


    <!-- ********************************************************** -->
    <!-- ************************** MODALS ************************ -->
    <!-- ********************************************************** -->

    <?php include '_includes/map-modal-opening.php'; ?>
    <?php include '_includes/map-modal-carrier.php'; ?>
    <?php include '_includes/map-modal-traceroute.php'; ?>
    <?php include '_includes/map-modal-settings.php'; ?>
    <?php include '_includes/map-modal-flagging.php'; ?>
    <?php include '_includes/map-modal-help.php'; ?>

</body>

<?php include '_includes/global-footer.php'; ?>

</html>