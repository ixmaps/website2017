<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>IXmaps</title>
    <?php include '_includes/global-head.php'; ?>

    <script src="_assets/js/tablesorter.js" type="text/javascript"></script>
    <script src="_assets/js/map.js" type="text/javascript"></script>
    <script src="_assets/js/search.js" type="text/javascript"></script>
    <script src="_assets/js/gmaps.js" type="text/javascript"></script>
    <script src="_assets/js/layers.js" type="text/javascript"></script>
</head>

<body id="map-page">
    <?php include '_includes/global-navigation.php'; ?>

    <!-- SEARCH AREA -->
    <?php include '_includes/map-search.php'; ?>

    <!-- RESULTS AREA -->
    <div class="map-holder">

        <!-- LEGEND SIDEBAR -->
        <?php include '_includes/map-layers.php'; ?>

        <!-- RESULTS SIDEBAR -->
        <?php include '_includes/map-results.php'; ?>

        <!-- GOOGLE MAPS -->
        <div class="map-canvas pusher">
            <div class="layers-toggle">
                <button class="ui toggle button">
                    <i class="ui image left floated">
                        <img src="/_assets/img/icn-layers.svg" alt="delete" />
                    </i>
                    1 Layers
                </button>
            </div>
            <div id="map"></div>
        </div>
    </div>


    <!-- ********************************************************** -->
    <!-- ************************** MODALS ************************ -->
    <!-- ********************************************************** -->

    <?php include '_includes/map-modal-carrier.php'; ?>
    <?php include '_includes/map-modal-router.php'; ?>
    <?php include '_includes/map-modal-settings.php'; ?>
    <?php include '_includes/map-modal-traceroute.php'; ?>


    <!-- <button id="settings-modal">OPENING MODAL</button>
    <button id="router-modal">ROUTER POP UP</button>
    <button id="carrier-modal">CARRIER POP UP</button>
    <button id="traceroutes-modal">TR DETAILS</button> -->

</body>

<?php include '_includes/global-footer.php'; ?>

<script type="text/javascript">
  $(document).ready(function() {
    init();
  });
</script>

</html>