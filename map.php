<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>IXmaps</title>
    <?php include '_includes/global-head.php'; ?>

    <script src="_assets/js/tablesorter.min.js" type="text/javascript"></script>
    <script src="_assets/js/prototype.js" type="text/javascript"></script>
    <script
      src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
      integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
      crossorigin="anonymous"></script>
      <!-- TODO - get this into the repo, just the pieces we need -->

    <!-- Production  -->
    <!--
    <script src="_assets/js/map.min.js" type="text/javascript"></script>
    <script src="_assets/js/gmaps.min.js" type="text/javascript"></script>
    <script src="_assets/js/search.min.js" type="text/javascript"></script>
    <script src="_assets/js/layers.min.js" type="text/javascript"></script> -->

    <!-- Development  -->
    <script src="_assets/js/map.js" type="text/javascript"></script>
    <script src="_assets/js/gmaps.js" type="text/javascript"></script>
    <script src="_assets/js/search.js" type="text/javascript"></script>
    <script src="_assets/js/layers.js" type="text/javascript"></script>
    <script src="_assets/js/jquery.toast.min.js"></script>
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

  <link rel="stylesheet" href="_assets/css/jquery.toast.min.css" />
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <!-- TODO, massive -->

</head>

<body id="map-page">

    <?php include '_includes/global-navigation.php'; ?>

    <!-- SEARCH AREA -->
    <?php include '_includes/map-search.php'; ?>

    <div id="filter-container">
      <!-- these will filled in by addFilterConstraint -->
      <!-- Colin: does this do anything? I think we've implemented this differently -->
    </div>

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
        <?php //include '_includes/map-results-old.php'; ?>

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

    <!-- PRIVACY SCORES - OLD APPROACH -->
    <div id="privacy-details" class="hidden map-icon-popup-container">
        <img class="map-icon-close-btn" src="_assets/img/icn-close.svg">
        <div id="carrier-title"></div>
        <div style="clear: both;"></div>
        <div id="privacy-details-data"></div>
    </div>



    <!-- ********************************************************** -->
    <!-- ************************** MODALS ************************ -->
    <!-- ********************************************************** -->

    <?php include '_includes/map-modal-opening.php'; ?>
    <?php include '_includes/map-modal-carrier.php'; ?>
    <?php //include '_includes/map-modal-router.php'; ?>
    <?php include '_includes/map-modal-traceroute.php'; ?>
    <?php include '_includes/map-modal-settings.php'; ?>
    <?php include '_includes/map-modal-flagging.php'; ?>
    <?php include '_includes/map-modal-help.php'; ?>

    <!-- <button id="opening-modal">OPENING MODAL</button> -->
    <!-- <button id="carrier-modal">CARRIER POP UP</button> -->
    <!-- <button id="router-modal">ROUTER POP UP</button> -->
    <!-- <button id="traceroutes-modal">TR DETAILS</button> -->
    <!-- <button id="settings-modal">MAP SETTINGS</button> -->
    <!-- <button id="flagging-modal">FLAGGING</button> -->

</body>

<?php include '_includes/global-footer.php'; ?>

</html>