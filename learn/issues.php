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

            <p>Whenever you visit a website, send an email, use a social media app, etc., your data moves across the internet in a series of "<a href="/learn/glossary.php#hop">hops</a>," starting from your device and then passed from one <a href="/learn/glossary.php#router">router</a> to the next until it reaches its destination. The routers along the way belong to a variety of <a href="/learn/glossary.php#isp">carriers</a> and are housed in <a href="/learn/glossary.php#internet_exchange">internet exchanges</a>. This sequence of routers and hops is called a <a href="/learn/glossary.php#traceroute">traceroute</a>. We map these traceroutes as lines (hops) joining successive dots (routers), based on our estimate of the physical location of these routers. You may be surprised by how far your data travels before arriving at its destination, and who gets to access it along the way.</p>

            <div class="ui inverted segment">
                <div class="ui inverted accordion">
                    <div class="title">
                        <i class="dropdown icon"></i>
                        <strong>How to Use Ixmaps</strong> to map data travel
                    </div>

                    <div class="content">
                        <p>Go to the <a href="/map.php">Map</a>, where you will see recent traceroutes from nearest your location. You can click on the dots and lines to learn more about the route and who carries your data.</p>


                        <p>To see other routes from near you:</p>
                        <ol>
                            <li>Click in the <strong>From</strong> box, to show the menu choices</li>
                            <li>Select your <strong>ISP</strong>, <strong>City</strong> or <strong>Country</strong>, or a combination of these, entering the relevant information.</li>
                            <li>Click <strong>Search</strong>. </li>
                        </ol>

                        <p>You will see mapped the most recent route that meets these conditions. On the right is the number of routes found and brief details about them. You can map these other routes by clicking on their TR ID number. Below the traceroute information, is the Carriers table with summary information about the various ISPs or carriers that handle the mapped route(s).</p>

                        <img src="/_assets/img/learn-travel.png" width="100%" />

                        <p>You can refine your selection using <strong>From</strong>, <strong>Via</strong> and <strong>To</strong>.</p>

                        <p>To see routes from your own personal device, you must first generate them yourself. Go to the <a href="/contribute.php">Contribute</a> page for instructions on how to do this.</p>

                        <p>For more details on how to select routes to display, see the Help button on the upper right of the Map page.</p>

                        <h6>See FAQs:</h6>
                        <ul>
                            <li><a href="/learn/faq.php#faq-issue-one">Where are the main internet exchanges in North America?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-one">How do I read a traceroute?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-one">How does IXmaps locate routers geographically and map them?</a></li>
                        </ul>
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
                        <strong>How to Use Ixmaps</strong> to map NSA interception
                    </div>

                    <div class="content">
                        <p>The <a href="/map.php">Map</a> shows 18 U.S. cities where reported and suspected <a href="/learn/glossary.php#nsa_interception_facilities">NSA interception facilities</a> are located.
                        <!-- READD ME -->
                        <!-- To see routes in our database that pass through at least one of the cities:</p>
                        <ol>
                            <li>Click in the <strong>Via</strong> box</li>
                            <li>Select <strong>Spy Agency: NSA</strong></li>
                            <li>Click <strong>Submit</strong></li>
                        </ol>

                        <p>To narrow the search, add other filters, such as <strong>From</strong> you, your country or your ISP, <strong>To</strong> your favorite site, etc., before clicking <strong>Submit</strong>.</p>
                        -->
                        <p>To see the locations of other suspected NSA surveillance operations conducted worldwide with the cooperation of AT&amp;T (program code-named Fairview) and Verizon (Stormbrew), click on the <strong>Layers</strong> button in the upper right and select their respective entries.</p>

                        <img src="/_assets/img/learn-nsa.png" width="100%" />

                        <h6>Do you know where your data goes?</h6>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pvdIB5vr4cw" frameborder="0" allowfullscreen></iframe>

                        <p>This video shows a 3D Google Earth animation of data traveling from the Ontario Science Centre to the San Francisco Art Institute's website, passing through the NSA surveillance site inside AT&amp;T's San Francisco internet switching facility at 611 Folsom Street. All traffic passing through this site is intercepted by NSA computers for inspection and storage. </p>

                        <h6>See FAQs:</h6>
                        <ol>
                            <li><a href="/learn/faq.php#faq-issue-two">What is NSA mass surveillance?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-two">How does IXmaps know where the NSA can intercept my data?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-two">What can the NSA do with my data?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-two">What's wrong with mass state surveillance?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-two">What can I do to keep my personal information from being captured by the NSA and other foreign state security and intelligence agencies?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-two">What about Canadian state security and intelligence agencies, such as CSE? Aren't they as much of a problem?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-two">What can I do to help make Canadian security agencies more democratically accountable?</a></li>
                        </ol>

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
                        <strong>How to Use Ixmaps</strong> to map boomerang routing
                    </div>

                    <div class="content">

                        <p>To see examples of boomerang routing:</p>
                        <ol>
                            <li>In the <strong>From</strong> box, select your country</li>
                            <li>In the <strong>To</strong> box, select your country again</li>
                            <li>In the <strong>Via</strong> box, select U.S. or another third country</li>
                            <li>Click <strong>Search</strong></li>
                        </ol>

                        <!-- READD ME -->
                        <!--
                        <p>Boomerang routing can even occur when the origin and destination are in the same city. To map these, adjust the <strong>From</strong> and <strong>To</strong> filters for the city of your choice and click <strong>Submit</strong>.</p> -->

                        <h6>IXmaps: See where your data travels (Open Media)</h6>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tHvuLCPiVg4" frameborder="0" allowfullscreen></iframe>

                        <p>This Open Media video explains the concept of boomerang routing and its significance for Canadians. See also this <a href="https://www.youtube.com/watch?v=F_v0VMvjcI8" target="_blank">Canadian Internet Boomerang Routing</a> video produced by the IXmaps team and this <a href="https://www.youtube.com/watch?v=swxLhgoG-fs" target="_blank">Monitoring Data</a> video produced by Montreal-based Options Consommateurs in their Moment of Privacy series.</p>

                        <h6>See FAQs</h6>
                        <ul>
                            <li><a href="/learn/faq.php#faq-issue-three">What's wrong with boomerang routing?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-three">Why does your data boomerang through the US?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-three">How can I avoid boomerang routing?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-three">Why is network sovereignty important to Canadians?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-three">What can Canadians do to keep their data at home and promote network sovereignty?</a></li>
                        </ul>
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
            <p>To answer this, we assessed the privacy transparency of the leading 43 ISPs serving Canadians.based on 10 criteria. While a few scored well, with the highest receiving 6 stars out of 10 possible, most performed poorly. You can read our results in the "<a href="/transparency.php">Keeping Internet Users in the Know or in the Dark</a>."</p>

            <div class="ui inverted segment">
                <div class="ui inverted accordion">
                    <div class="title">
                        <i class="dropdown icon"></i>
                        <strong>How to Use Ixmaps</strong> to map ISP data access
                    </div>

                    <div class="content">
                        <p>On the right of the <a href="/map.php">Map</a>, take a look at the <strong>Carrier</strong> table. It lists the ISPs or carriers that handle the data in the currently mapped traceroutes. The <strong>Routers</strong> column indicates the total number of routers for each carrier. The <strong>Transparency</strong> column shows the total number of stars we awarded them on  our 10 criteria. Click on the carriers with star scores to learn more details or read our <a href="/transparency.php">Transparency</a> reports covering all the carriers we rated.</p>

                        <div style="text-align: center"><img src="/_assets/img/learn-carriers.png" width="50%" /></div>

                        <h6>See FAQs:</h6>
                        <ul>
                            <li><a href="/learn/faq.php#faq-issue-four">What personal information does my ISP have about me?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-four">What legal responsibilities do ISPs have for protecting Canadians' personal information and communication?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-four">Does my ISP being transparent about its privacy policies mean that it is protective of my privacy?</a></li>
                            <li><a href="/learn/faq.php#faq-issue-four">What can I do to help make ISPs more privacy transparent and privacy protective?</a></li>
                        </ul>

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
