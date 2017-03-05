<?php
include('application/config.php');
include('application/model/IXmapsMaxMind.php');

$myIp = $_SERVER['REMOTE_ADDR'];
//$myIp = "186.108.108.134"; // Buenos Aires
//$myIp = "128.100.72.189"; // Toronto

$mm = new IXmapsMaxMind();
$geoIp = $mm->getGeoIp($myIp);
$mm->closeDatFiles();

$myCountry = ''.$geoIp['geoip']['country_code'];
$myCity = ''.$geoIp['geoip']['city'];
$myAsn = $geoIp['asn'];
$myIsp = $geoIp['isp'];
$myLat = $geoIp['geoip']['latitude'];
$myLong = $geoIp['geoip']['longitude'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>IXmaps</title>
    <?php include '_includes/global-head.php'; ?>

    <script src="_assets/js/tablesorter.min.js" type="text/javascript"></script>
    <script src="_assets/js/prototype.js" type="text/javascript"></script>    

    <!-- Testing call to gm script -->
    <!-- <script src="https://maps.google.com/maps/api/js?v=3&libraries=geometry&key=AIzaSyBVsE02fgOf4vE7qqOzE8EyaDGtrXViZOs&callback=initializeMap" type="text/javascript"></script> -->
    
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
    <script>
        var myIp = '<?php if(isset($myIp)) { echo $myIp;} ?>';
        var myCity = '<?php if(isset($myCity)) { echo $myCity;} ?>';
        var myCountry = '<?php if(isset($myCountry)) { echo $myCountry;} ?>';
        var myISP = '<?php if(isset($myIsp)) { echo $myIsp;} ?>';
        var myASN = '<?php if(isset($myAsn)) { echo $myAsn;} ?>';
        var myLat = '<?php if(isset($myLat)) { echo $myLat;} ?>';
        var myLong = '<?php if(isset($myLong)) { echo $myLong;} ?>';

        var initMode = 0;
        var trIdFilter = 0;

        jQuery(document).ready(function() {
            init();
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
        });
    </script>
  <!-- Toast library -->
  <script src="_assets/js/jquery.toast.min.js"></script>
  <link rel="stylesheet" href="_assets/css/jquery.toast.min.css" />

</head>

<body id="map-page">
    <?php include '_includes/global-navigation.php'; ?>

    <!-- SEARCH AREA -->
    <?php include '_includes/map-search.php'; ?>

    <div id="filter-container">
      <!-- these will filled in by addFilterConstraint -->
    </div>

    <!-- LOADER MASK -->
    <div id="loader" style="display: none">
        <div id="loader-mask"></div>
        <div class="loader-image">
            <img width="100px" src="_assets/img/icn-loading.gif"/>
            <br/><br/>
            <div id="cancel-query-div">
                <button id="cancel-query">Cancel</button>
            </div>
        </div>
    </div>

    <!-- RESULTS AREA -->
    <div class="map-holder">

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

    <!-- ********************************************************** -->
    <!-- ************************** MODALS ************************ -->
    <!-- ********************************************************** -->

    <?php include '_includes/map-modal-opening.php'; ?>
    <?php include '_includes/map-modal-carrier.php'; ?>
    <?php //include '_includes/map-modal-router.php'; ?>
    <?php include '_includes/map-modal-traceroute.php'; ?>
    <?php include '_includes/map-modal-settings.php'; ?>


    
    <button id="opening-modal">OPENING MODAL</button>
    <button id="carrier-modal">CARRIER POP UP</button>
    <!-- <button id="router-modal">ROUTER POP UP</button> -->
    <button id="traceroutes-modal">TR DETAILS</button>
    <button id="settings-modal">MAP SETTINGS</button>

<!-- TR DETAILS - OLD APPROACH -->
<!--  -->

  <div id="tr-details" style="display: none">
    <img id="tr-details-close-btn" class="map-icon-close-btn" src="/_assets/img/icn-close.svg">

    <div id="tr-details-data">
      <iframe id="tr-details-iframe" src=""></iframe>
    </div>
  </div>

</body>

<?php include '_includes/global-footer.php'; ?>

</html>