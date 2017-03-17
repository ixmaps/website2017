<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>IXmaps | Map Your Internet</title>
    <?php include '_includes/global-head.php'; ?>
    <script src="_assets/js/db-stats.js" type="text/javascript"></script>
    <script>
        jQuery(document).ready(function() {
            getDbStats();
        });
    </script>
</head>

<body id="home-page">
<?php include '_includes/global-navigation.php'; ?>

<header class="jumbo-hero">
    <div class="content">
        <h1>Map Your Internet</h1>
        <p class="intro">See how data travels across the internet <br> and the privacy risks it faces along the way</p>
        <a class="ui massive grey button" href="map.php" target="_self">Start Mapping</a>
    </div>
</header>

<section class="issue-summary-holder">
    <div class="content">

    <div class="issue-summary">
        <p class="intro text-center">
        IXmaps is an internet mapping tool  that can help you learn more
        about  these internet privacy issues:
        </p>

        <a href="learn/issues.php#issue-one" class="issue-item">
            <div href="#" class="issue">
                <img src="_assets/img/icn-route.svg">
                <span>Where on earth does your <strong>personal data travel</strong>?</span>
            </div>
        </a>

        <a href="learn/issues.php#issue-two" class="issue-item">
            <div href="#" class="issue">
                <img src="_assets/img/icn-nsa.svg">
                <span>Where can the <strong>NSA intercept</strong> your data en route?</span>
            </div>
        </a>

        <a href="learn/issues.php#issue-three" class="issue-item">
            <div class="issue">
                <img src="_assets/img/icn-boomerang.svg">
                <span>What is <strong>boomerang routing</strong>, and what does it mean for Canadian network sovereignty?</span>
            </div>
        </a>

        <a href="learn/issues.php#issue-four" class="issue-item">
            <div class="issue">
                <img src="_assets/img/icn-privacy.svg">
                <span>Which ISPs can access your data and how  <strong>privacy transparent</strong> are they?</span>
            </div>
        </a>
    </div>

    </div>
</section>

<section id="database-stats">
    <header>
        <h4>IXmaps Database Status</h4>
    </header>

    <div class="content">
        <div class="stat">
            <h6>Contributors</h6>
            <span id="contributors-stat"><img width="20px" src="/_assets/img/icn-loading.gif"/></span>
        </div>
        <div class="stat">
            <h6>Destination URLs</h6>
            <span id="destinations-stat"><img width="20px" src="/_assets/img/icn-loading.gif"/></span>
        </div>
        <div class="stat">
            <h6>Traceroutes</h6>
            <span id="traceroutes-stat"><img width="20px" src="/_assets/img/icn-loading.gif"/></span>
        </div>
        <div class="stat">
            <h6>Latest Contribution</h6>
            <span id="latest-tr-stat"><img width="20px" src="/_assets/img/icn-loading.gif"/></span>
        </div>
    </div>
</section>

<?php include '_includes/global-footer.php'; ?>
</body>
</html>