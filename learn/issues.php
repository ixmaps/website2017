<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Issues | IXmaps</title>
    <?php include '../_includes/global-head.php'; ?>
</head>

<body id="issues-page">
<?php include '../_includes/global-navigation.php'; ?>

<header class="hero">
    <div class="content">
        <h1>Issues</h1>
    </div>
</header>

<div class="content">
    <article>
        <p class="introduction">Where data travels across the internet, as well as who routes it and has access along the way, raises important privacy and other issues. Below you can learn more about these concerns and how IXmaps can help you understand them better. Highlighted phrases link to the corresponding item in the FAQ, Glossary, and Resources pages.</p>
    </article>
</div>

<section class="issue-section">
    <div class="content">
        <article id="issue-one">
            <header class="issue-header">
                <div class="icon-holder"><img class="" src="/_assets/img/icn-route.svg"></div>
                <h2>Where on earth does <br />your personal data travel?</h2>
            </header>

            <p>Whenever you visit a website, send an email, use a social media app, etc. ...your data moves across the internet in a series of "<a href="/learn/glossary.php#hop">hops</a>," starting from your device and then passed from one <a href="/learn/glossary.php#router">router</a> to the next until it reaches its destination. The routers along the way belong to a variety of <a href="/learn/glossary.php#isp">carriers</a> and are housed in <a href="/learn/glossary.php#internet_exchange">internet exchanges</a>. This sequence of routers and hops is called a <a href="/learn/glossary.php#traceroute">traceroute</a>. We map these traceroutes as lines (hops) joining successive dots (routers), based on our estimate of the physical location of these routers. You may be surprised by how far your data travels before arriving at its destination, and who gets to access it along the way.</p>

            <div class="ui inverted segment">
                <div class="ui inverted accordion">
                    <div class="title">
                        <i class="dropdown icon"></i>
                        <strong>How to Use Ixmaps</strong> to map data travel
                    </div>

                    <div class="content">
                        <?php include '../_includes/learn-issues-one.php'; ?>
                    </div>
                </div>
            </div>
        </article>
    </div>
</section>

<section class="issue-section">
    <div class="content">
        <article id="issue-two">
            <header class="issue-header">
                <div class="icon-holder"><img class="" src="/_assets/img/icn-nsa.svg"></div>
                <h2>Where can the NSA intercept your data en route?</h2>
            </header>

            <p>The revelations of <a href="https://en.wikipedia.org/wiki/Edward_Snowden" target="_blank">Edward Snowden</a> show that the <a href="/learn/glossary.php#nsa">U.S. National Security Agency (NSA)</a> and its signals intelligence agency partners in the <a href="/learn/glossary.php#five_eyes">Five Eyes</a> countries are intercepting, analysing and storing internet communications from individuals around the world. Their stated ambition is to “<a href="/learn/glossary.php#collect_it_all">collect it all</a>”. Through various <a href="/learn/glossary.php#upstream_surveillance_programs">Upstream surveillance programs</a> these agencies intercept data “on the fly”, as it travels across the internet. This enables the capture of all forms of internet communications and generates massive quantities of associated <a href="/learn/glossary.php#metadata">metadata</a>.</p>

            <p>The NSA takes the lead in this spying and has installed <a href="/learn/glossary.php#nsa_interception_facilities">interception facilities</a> at major <a href="/learn/glossary.php#internet_exchange">internet switching sites</a> within the U.S. as well as globally. Locating interception facilities in as few as 18 cities is sufficient to capture nearly 100% of internet communications originating within or passing through the U.S.</p>

            <div class="ui inverted segment">
                <div class="ui inverted accordion">
                    <div class="title">
                        <i class="dropdown icon"></i>
                        <strong>How to Use Ixmaps</strong>  to map data travel
                    </div>

                    <div class="content">
                        <?php include '../_includes/learn-issues-two.php'; ?>
                    </div>
                </div>
            </div>
        </article>
    </div>
</section>

<section class="issue-section">
    <div class="content">
        <article id="issue-three">
            <header class="issue-header">
                <div class="icon-holder"><img class="" src="/_assets/img/icn-boomerang.svg"></div>
                <h2>What is boomerang routing, and what does it mean for Canadian network sovereignty?</h2>
            </header>

            <p>A surprising amount of domestic communications between Canadians and internet sites within Canada travels via the U.S. We call this type of internet traffic "<a href="/learn/glossary.php#boomerang_routing">boomerang routing</a>." Over 25% of the intra-Canadian routes in the IXmaps database follow a boomerang path, subjecting them to NSA surveillance. This can happen with internet traffic of other countries too. These communications lose legal and constitutional protection when they leave their home country. At the same time, they are exposed to foreign surveillance and jurisdiction. This common occurrence challenges privacy and threatens "<a href="/learn/glossary.php#network_sovereignty">network sovereignty</a>," understood as national sovereignty in the internet context. Sometimes termed cyber-sovereignty, this term refers to the ability of a nation-state, or other geographically defined political governance entity, to exercise effective control over critical internet infrastructure within its jurisdictional region. Pursued within a human rights framework, network sovereignty can help protect privacy, as well as achieve routing efficiencies and economic benefits.</p>

            <div class="ui inverted segment">
                <div class="ui inverted accordion">
                    <div class="title">
                        <i class="dropdown icon"></i>
                        <strong>How to Use Ixmaps</strong> to map data travel
                    </div>

                    <div class="content">
                        <?php include '../_includes/learn-issues-three.php'; ?>
                    </div>
                </div>
            </div>

        </article>
    </div>
</section>

<section class="issue-section">
    <div class="content">
        <article id="issue-four">
            <header class="issue-header">
                <div class="icon-holder"><img class="" src="/_assets/img/icn-privacy.svg"></div>
                <h2>Which ISPs can access your data and how privacy transparent are they?</h2>
            </header>

            <p>The <a href="/learn/glossary.php#isp">internet service providers (ISP)</a> we pay to obtain internet access are not the only telecommunications carriers that transport our data to its destination. Operating largely behind the scenes, it is not uncommon for four or more carriers to be involved, each passing our data onto the next until it arrives at its destination. Each of these carriers has access to your personal information, not just who you contacted, when, where, etc. but also the content of your communications. This means they have legal responsibilities for protecting your privacy. The better ones will go beyond the minimum legal privacy requirements and want to tell you how. But who precisely are these carriers, and how transparent are they protecting personal privacy? </p>
            <p>To answer this, we assessed the privacy transparency of the leading 43 ISPs serving Canadians.based on 10 criteria. While a few scored well, with the highest receiving 6 stars out of 10 possible, most performed poorly. You can read our results in the "<a href="transparency/2014-report.php">Keeping Internet Users in the Know or in the Dark</a>."</p>

            <div class="ui inverted segment">
                <div class="ui inverted accordion">
                    <div class="title">
                        <i class="dropdown icon"></i>
                        <strong>How to Use Ixmaps</strong> to map data travel
                    </div>

                    <div class="content">
                        <?php include '../_includes/learn-issues-four.php'; ?>
                    </div>
                </div>
            </div>

        </article>
    </div>
</section>

<?php include '../_includes/global-footer.php'; ?>

<script>
  $('.ui.accordion')
    .accordion();
</script>

</body>
</html>
