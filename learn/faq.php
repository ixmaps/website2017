<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>FAQ | IXmaps</title>
    <?php include '../_includes/global-head.php'; ?>
</head>

<body id="faq-page">
<?php include '../_includes/global-navigation.php'; ?>

<header class="hero">
    <div class="content">
        <h1>FAQ</h1>
    </div>
</header>

<section>
    <div class="content">
        <article>
            <div class="ui section hidden divider"></div>
            <p class="intro">These FAQ address key questions that arise from the four themes. </p>
            <p>Let us know if you think we've missed any important questions, or the answers need to be revised in some way email: IXmaps@ischool.utoronto.ca.</p>
            <div class="ui hidden section divider"></div>
        </article>
    </div>
</section>

<section class="faq">
    <div class="content">
        <section class="faq-block">
            <h2 id="faq-issue-one">Where on earth does your personal data travel?</h2>
            <div class="ui styled fluid accordion">
                <div class="title">
                    Where are the main internet exchanges in North America?
                </div>

                <div class="content">
                    <p>Internet exchanges are generally located in large, often windowless buildings in the heart of cities. Since internet infrastructure is typically built on pre-existing telecommunications infrastructure, these buildings are often former telephone exchanges, especially those close to (former) railway lines that had telegraph rights of way. Here are major internet exchanges in North America:</p>

                    <div class="row">
                        <div class="faq-example-image"><img class="ui fluid image" src="/_assets/img/ix-611-folsom.jpg"/><small>Credit: <a hred="http://www.mccullagh.org/photo/1ds-8/611-folsom-street-nsa" target="_blank">Declan McCullagh</a></small></div>
                        <div class="faq-example-description">611 Folsom Street, San Francisco, where Mark Klein reports the NSA has installed one of its Upstream interception facilities. Reference:  Klein, 2008.</div>
                    </div>

                    <div class="row">
                        <div class="faq-example-image"><img class="ui fluid image" src="/_assets/img/ix-350-cermak.jpg"/><small>Credit: <a hred="https://www.colocationamerica.com/data-center-locations/chicago.htm" target="_blank">Colocation America</a></small></div>
                        <div class="faq-example-description">350 Cermak Street, Chicago, the world's largest data centre.</div>
                    </div>

                    <div class="row">
                        <div class="faq-example-image"><img class="ui fluid image" src="/_assets/img/ix-150-front.jpg" /><small>Credit: <a hred="http://www.151frontstreet.com/" target="_blank">Allied Properties REIT</a></small></div>
                        <div class="faq-example-description">151 Front Street, Toronto, the largest internet exchange in Canada.</div>
                    </div>

                    <div class="row">
                        <div class="faq-example-image"><img class="ui fluid image" src="/_assets/img/ix-33-thomas.jpg" /><small>Credit: <a hred="https://en.wikipedia.org/wiki/File:33_Thomas_Sidewalk_View.JPG" target="_blank">CC 2.5 by Dhaluza</a></small></div>
                        <div class="faq-example-description">33 Thomas Street, New York City.  Known locally as AT&amp;T's "Long Lines Building,"" the Intercept reports it is an NSA spying hub, code-named Titanpointe. Reference: Gallagher &amp; Moltke, 2016.</div>
                    </div>

                    <p>This <a href="https://www.youtube.com/embed/pvdIB5vr4cw" target="_blank">video</a> shows a 3D Google Earth animation of data traveling from the Ontario Science Centre to the San Francisco Art Institute's website, passing through three of these internet exchanges.</p>

                    <div class="youtube video">
                        <div class="ui embed" data-url="https://www.youtube.com/embed/pvdIB5vr4cw"></div>
                    </div>

                    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/pvdIB5vr4cw" frameborder="0" allowfullscreen></iframe> -->


                </div>
                <div class="title">
                    How do I read a traceroute?
                </div>
                <div class="content">
                    <p>Clicking on any traceroute line (i.e. hop) on the Map page opens the traceroute details screen, where you can see detailed information about each step along the route. <!-- Here is an example of traceroute #6896, which is depicted in the IXmaps Canadian internet boomerang routing video: --></p>
                    <dl>
                        <dt>Hop</dt>
                        <dd>The sequence of routers that each pass data packets along the route from the contributor's device to the destination host</dd>
                        <dt>Route</dt>
                        <dd>A graphical representation of these routers and the hops between them, colour-coded by the owning carrier. By default, the subsequent hop is presumed the responsibility of the originating router and coloured accordingly. The different dot shapes correspond to the accuracy and precision with which IXmaps can geo-locate the physical position of the router, as indicated in the Legend. Depending on the map Settings, some routers included here may be excluded from appearing on the map display. e.g. by default, routers in Canada and the U.S. geo-located only with country level accuracy and precision aren't displayed on the ma; routers flagged by users as incorrectly located are also by default not displayed.</dd>
                        <dt>NSA?</dt>
                        <dd>Indicates whether an NSA interception facility is known or suspected to be located in the corresponding city. While this doesn't necessarily mean that the NSA intercepts the internet traffic of every carrier operating in the city, given the highly concentrated nature of routing and the NSA's proclaimed appetite for collection, it is highly likely the NSA will capture any data passing through the city.</dd>
                        <dt>Location</dt>
                        <dd>The country and city of the router, where these can be estimated.</dd>
                        <dt>Carrier</dt>
                        <dd>The ISP or carrier, with its colour code, registered as the owner of the router.</dd>
                        <dt>Latency (minimum latency)</dt>
                        <dd>Indicates transmission delay, measured as the minimum round trip time, in milliseconds, for the originating device to receive a response from the router.</dd>
                        <dt>Technical Details</dt>
                        <dd>Provides a more technical version of the traceroute, including IP address and hostname for each router. You can also flag for correction any router you think may not be geo-located accurately.</dd>
                    </dl>
                    <p>You can learn more about a term by clicking on it, taking you to the corresponding Glossary term.</p>
                </div>
                <div class="title">
                    How does IXmaps locate routers geographically and map them?
                </div>
                <div class="content">
                    <p>In order to map traceroutes, we must estimate the physical location of the routers associated with the IP addresses in the route. Once a contributor generates and submits a traceroute using the IXmaps Client, our software initially assigns locations to each IP addresses based on leading commercial service called Maxmind. <a href="https://www.maxmind.com/en/geoip2-city-database-accuracy?country=&resolution=25" target="_blank">Maxmind reports</a> that it accurately resolves an IP address to within 25km of its actual location 80% of the time, at least in Canada and the US. This is often sufficient to geo-locate the router to a nearby city. However, Maxmind tends to work best when locating edge routers, i.e. those close to the origin or termination; however, we have found that its success rate when attempting to geo-locate core routers drops to nearly zero.</p>
                    <p>Therefore, we have adopted a layered strategy to assign physical locations to core routers. Mainly this involves parsing the router hostname to extract location information. For example, looking into the Technical details of traceroute 6896, we can see the router at hop 8 is owned by Cogent, has IPaddress <code>154.54.42.69</code> and hostname <code>te0-1-0-2.mpd22.jfk02.atlas.cogentco.com</code>. Cogent uses airport codes in many of their router hostnames, so with JFK being the airport code for the best known New York City airport, we infer the router is in NYC. We also use latency calculations to help locate routers, or at least spot where Maxmind gives impossible results.</p>
                    <p>Finally, we invite you to flag routers you suspect are inaccurately located. While this geo-location process usually provides more accurate longitude and latitude data than Maxmind offers, it generally remains reliable only at a city level; so many of our corrections place routers at a generic city location instead of in a particular building. For more detail, see <a href="/docs/2011-06-09-ixmaps-geolocation.pdf" target="_blank">How IXmaps Geolocates Routers</a>.</p>
                </div>
            </div>
        </section>
    </div>
</section>


<section class="faq">
    <div class="content">
        <section class="faq-block">
            <h2 id="faq-issue-two">NSA Surveillance</h2>

            <div class="ui styled fluid accordion">
                <div class="title">
                    What is NSA mass surveillance?
                </div>
                <div class="content">
                    <p>The <a href="/learn/glossary.php#nsa">NSA</a> has developed hundreds of different surveillance programs, to capture and analyse internet communications in bulk within the US and with its <a href="/learn/glossary.php#five_eyes">Five Eyes</a> partners, around the globe. The best known programs are <a href="/learn/glossary.php#upstream">Upstream</a> and <a href="/learn/glossary.php#prism">PRISM</a>. The NSA claims its authority to conduct such surveillance without individual warrants under provisions of the <a href="https://en.wikipedia.org/wiki/Patriot_Act" target="_blank">USA Patriot Act</a>, the <a href="https://en.wikipedia.org/wiki/USA_Freedom_Act" target="_blank">USA Freedom Act</a>, the <a href="https://en.wikipedia.org/wiki/Foreign_Intelligence_Surveillance_Act_of_1978_Amendments_Act_of_2008" target="_blank">FISA Amendments Act</a>, and <a href="https://en.wikipedia.org/wiki/Executive_Order_12333" target="_blank">Executive Order 12333</a>.</p>
                </div>
                <div class="title">
                    How does IXmaps know where the NSA can intercept my data?
                </div>
                <div class="content">
                    <p>Former AT&amp;T technician Mark Klein provided the first direct evidence of an NSA bulk internet interception facility, in AT&amp;T's main San Francisco switching centre at 611 Folsom Street. He reported troubleshooting a malfunctioning fibre-optic splitter and being shown the now infamous <a href="https://en.wikipedia.org/wiki/Room_641A" target="_blank">Room 641A</a>, or “secret spy room" where Narus deep packet inspection computers examine captured communication data and selectively forward it to the NSA for further analysis and storage. </p>

                    <img src="/_assets/img/faq-ixmaps-video.jpg" width="66%" />
                    <img src="/_assets/img/faq-room-641A.jpg" width="30%" /> <br />

                    <small>Credit: <a hred="https://en.wikipedia.org/wiki/File:Room_641A_exterior.jpg" target="_blank">Mark Klien</a></small>

                    <p>Klein heard of similar interception operations in several other cities, including Seattle, San Jose, Los Angeles, and San Diego. From this, Internet experts project the NSA operated 15-20 similar interception sites in the US. NSA documents released by Snowden in 2013 confirmed these suspicions, identifying their Upstream interception program with AT&amp;T as '<a href="https://en.wikipedia.org/wiki/Fairview_%28surveillance_program%29" target="_blank">Fairview</a>' and that with Verizon as '<a href="https://en.wikipedia.org/wiki/STORMBREW" target="_blank">Stormbrew</a>.' View our spreadsheet estimating which 18 US cities are most likely to have NSA interception facilities</p>

                    <p>This NSA slide released by Snowden summarizes the various Five Eyes surveillance operations worldwide. The blue dots refer to the 20 large scale, high speed optical cable interceptions at major global gateways, green dots to 30 national interceptions and the reddish dots to 80 regional interceptions in major cities.</p>

                    <img src="/_assets/img/faq-nsa1024-slide.jpg" width="100%" />

                    <p>View cities where we suspect NSA conducts bulk interception operations on the <a href="/map.php">Map</a>, by turning on the NSA, Fairview and Verizon layers.</p>

                    <p>References: Klein, 2009; PBS Frontline, 2007, Angwin et al, 2015. Boon et al, 2013. Worldwide SIGINT/Defense Cryptologic Platform</p>
                </div>
                <div class="title">
                    What can the NSA do with my data?
                </div>
                <div class="content">
                    <p>What the NSA can do with your data legally, depends mainly on whether you are treated as a foreigner or a 'U.S. person,' i.e. citizen or permanent resident of the U.S. Foreigners effectively have no legal protection for their data, while U.S. persons have some rights. The Snowden documents show that the NSA has the technical ability to collect, store indefinitely, and access selectively, virtually your entire record of online activities. It can also link your records to the records of others you appear to be affiliated with or fit a similar threat profile to. Practically speaking, the risk you face as an individual depends on whether you become a 'person of interest' in their investigations. While the justification provided for the expansion of state surveillance powers among Five Eyes countries since 9/11 is to combat terrorism, the Snowden documents reveal that governments use their signals intelligence agencies for a much wider range of targets and for domestic purposes. </p>
                </div>
                <div class="title">
                    What's wrong with mass state surveillance?
                </div>
                <div class="content">
                    <p>While state-based internet surveillance has legitimate purposes, and few would suggest that it be abolished entirely, the wide scope, fine granularity, and questionable legality of the forms of surveillance described here pose many significant challenges. Unregulated mass surveillance by state and corporate actors presents a serious threat to the openness, security, privacy, and diversity of communications that the internet relies on to thrive. When internet users, whether individuals, governments, corporations or civil society groups, cannot trust that their communications are not interfered with or won't be used against them, the internet's value, legitimacy and generativity are eroded. This will either push users to withdraw, narrowing the range of public discourse, or to adopt counter measures that at the very least add friction, and worse, invite an arms race of ever escalating surveillance measures and countermeasures. Either way, mass surveillance detracts from the internet's potential as a universally accessible common resource for everyday living and an open platform for socio/economic innovation.</p>
                </div>
                <div class="title">
                    What can I do to keep my personal information from being captured by the NSA and other foreign state security and intelligence agencies?
                </div>
                <div class="content">
                    <p>As long as the NSA and its partners maintain their global mass surveillance apparatus and use it largely unfettered, there is very little you can do to avoid having your internet communications intercepted. This leaves only two unattractive options:</p>
                    <ol>
                        <li>Avoid internet communications and other activities that leave a digital record, especially if you are already a person of interest for the security agencies or your activities risk appearing suspicious. This can have a <a href="https://openmedia.org/en/mass-surveillance-results-meekness-fear-and-self-censorship-according-new-study" target="_blank">chilling effect</a> on free expression and undermine the vigorous public discussion.</li>
                        <li>Obscure your communications, so when intercepted, they cannot be used to implicate you or your associates. Often this means adopting various forms of encryption, such as <a href="https://en.wikipedia.org/wiki/Pretty_Good_Privacy" target="_blank">PGP (Pretty Good Privacy)</a> for email or using the <a href="https://en.wikipedia.org/wiki/Tor_(anonymity_network)" target="_blank">Tor (the onion router)</a> browser, which further obscures your identity and location. For more on self-protection techniques, see the <a href="https://ssd.eff.org/" target="_blank">EFF</a>, <a href="https://freedom.press/training/" target="_blank">FPF</a> and <a href="http://www.cjfe.org/journalists_in_distress_securing_your_digital_life" target="_blank">CJFE</a> resource pages. None of these are fool-proof and require technical proficiency and diligence to achieve highly secure communications. By raising the costs of surveillance they can force security agencies to take a more focussed approach in their targeting, thereby mitigating the effects of mass surveillance. However, until such obfuscation measures are widely adopted, simply using them raises suspicions and invites closer attention. It also encourages the agencies to complain their targets are 'going dark,' and seek more surveillance powers and resources.</li>
                    </ol>
                    <p>Avoiding or obscuring communication as a self-protective response to mass state surveillance has severe limitations because it does not address the fundamental problems with unfettered mass state surveillance beyond just violating privacy. The deeper challenge mass surveillance poses is to democratic governance itself. Only when state security intelligence lance activities are brought within internationally recognized human rights standards, such as the 13 principles the <a href="https://necessaryandproportionate.org/" target="_blank">Necessary and Proportionate</a> framework offer, will people be able to trust their personal communication to the internet.</p>
                </div>
                <div class="title">
                    What about Canadian state security and intelligence agencies, such as CSE? Aren't they as much of a problem?
                </div>
                <div class="content">
                    <p>The focus here has been on privacy risks of routing via the U.S. and hence NSA interception. However, this is not to suggest that keeping Canadian domestic internet traffic within Canadian borders or avoiding U.S. transit when communicating with third countries would fully shield Canadians from mass state surveillance. It is now well-documented that Canada's own signals intelligence agency, the Communication Security Establishment (CSE), is involved in a variety of domestic surveillance activities, including the potential capture of internet communication metadata of millions of Canadians. This domestic surveillance raises the same serious privacy and human rights concerns as those addressed above. Addressing these concerns by reforming Canadian laws as well as bringing security and law enforcement agencies demonstrably within legal and constitutional bounds is urgent and challenging. A vital difference between NSA and CSE surveillance is that in the latter case, Canadians retain their legal and constitutional protections. Where these laws or their application are in need of reform, Canadians have much more effective means for achieving this than they do in the case of NSA surveillance. These means include legislative initiatives and regulatory oversight as well as civil society legal challenges and advocacy campaigns pushing back against excessive state surveillance. Reference: Robinson, 2016.</p>
                </div>
                <div class="title">
                    What can I do to help make Canadian security agencies more democratically accountable?
                </div>
                <div class="content">
                    <p>The current <a href="https://killc51.ca/" target="_blank">Kill C51 campaign</a> to repeal the dangerous measures of the <a href="https://en.wikipedia.org/wiki/Anti-terrorism_Act,_2015" target="_blank">Anti-Terrorism Act (Bill C-51)</a>, which rely in part on internet surveillance, is particularly important in bringing greater accountability to Canadian security agencies. Civil society organizations active in this campaign include: <a href="https://bccla.org/" target="_blank">B.C. Civil Liberties Association (BCCLA)</a>, <a href="https://ccla.org/" target="_blank">Canadian Civil Liberties Association (CCLA)</a>, <a href="http://www.cjfe.org/" target="_blank">Canadian Journalists for Free Expression (CJFE)</a>, <a href="https://fipa.bc.ca/" target="_blank">Freedom of Information and Privacy Association (FIPA)</a> &amp; <a href="https://openmedia.org/" target="_blank">OpenMedia.org</a>.</p>
                </div>
            </div>
        </section>
    </div>
</section>


<section class="faq">
    <div class="content">
        <section class="faq-block">
            <h2  id="faq-issue-three">Boomerang Routing and Canadian Network Sovereignty</h2>

            <div class="ui styled fluid accordion">
                <div class="title">
                    What's wrong with boomerang routing?
                </div>
                <div class="content">
                    <p>From a human rights point of view, the most serious problem with boomerang routing comes when it the exposures communications to a foreign state, such as the U.S., that intercepts all internet traffic passing through it. As mentioned above, this poses serious risks to privacy, free expression and other rights essential for a healthy democracy.  Communications and personal information lose whatever legal or constitutional protections they may have at home and in the absence of binding treaties to the contrary, become subject entirely to foreign jurisdiction. In the case of the U.S., there are no effective legal or technical limits on the handling on foreigners' data. And for many, the Trump administration appears to take an alarmingly broad view of those it regards as potential threats and an aggressive approach to targeting them.</p>
                    <p>Boomerang routing incurs other penalties that are more economic in nature. Longer routes mean paying intermediaries for transit services, adding to the cost of business. Circuitous routings also often impairs technical efficiency, due to additional latency, or delay in signals reaching their destination. While this typically adds only 10's of millisecs to transit time, this can be significant for certain kinds of on-line activities, such as financial trading and gaming. Content providers generally prefer to locate their servers near high capacity internet exchanges to improve their attractiveness as internet businesses. They suffer a competitive disadvantage if their audiences experience delays due to congestion or high latencies.  Finally, boomerang routing undermines sovereignty, because it makes vital infrastructure reliant on other countries or entities. As just noted, this may incur risks in terms of protecting privacy and other human rights or undermines industrial strategy that seeks to promote local economic enterprise. More generally, asymmetries in dependence over critical infrastructure shifts bargaining power in bi-lateral relations, to the disadvantage of the weaker party.</p>
                </div>
                <div class="title">
                    Why does your data boomerang through the US?
                </div>
                <div class="content">
                    <p>Numerous factors influence the route that data takes across the internet. While there is a popular understanding that data takes the most efficient path to its destination, much more important are the agreements that the various carriers  make between themselves to inter-connect their individual networks that together constitute the internet. Cost saving is an obvious consideration. The cheapest path may not be the shortest because investments in capacity tend to be along existing routes (e.g. along rail lines) or those with higher value traffic.  But anti-competitive business strategy can be an over-riding factor. Large incumbent carriers take advantage of their dominance to force their smaller competitors to incur relatively greater costs with more circuitous and international routing.  This is especially evident with same-city boomerang routing, as seen with TR ????, in which a data path originating and terminating in Toronto passes through the same internet exchange, at 151 Front Street, on its way to and from the US. As shown in this table, two of Canada's largest carriers, Bell and Telus, do not peer with any other carriers inside Canada. This means that any subscribers of these ISPs will incur boomerang routing to reach any other domestic ISP. Source: Woodcock, 2016. See IXmaps Boomerang video.</p>

                    <img src="/_assets/img/faq-cira-2016-canadian-peering.png" width="100%" /><br />

                    <small>Credit: <a hred="https://cira.ca/sites/default/files/public/Canadian%20Peering%202016.pdf" target="_blank">CIRA Study on Canadian Network Interconnection (PDF)</a></small>

                </div>
                <div class="title">
                    How can I avoid boomerang routing?
                </div>
                <div class="content">
                    <p>If you and your destination website or other communication partner are in the same country, whether or not your personal data leaves the country en route depends mainly on how your ISP connects with the ISP at the other end. Given current ISP practices, along with every other internet user in Canada you will encounter boomerang routing as part of your normal activities. One way you can reduce boomerang routing is to use our <a href="/map.php">Map</a> to check whether routes from your ISP to your intended destination passes through the U.S., and if so, avoid the site. This of course takes effort and isn't always possible. Where you have a choice of ISPs, you could also check our <a href="/transparency.php">Privacy Transparency</a> report and pick as your ISP the one most committed to protecting your privacy and to keeping your data within Canada (see especially Criteria 7 through 9). But while this sends an important signal of concern, until websites hosted in Canada use ISPs that similarly avoid boomerang routing, this will only be partially effective. Ultimately, avoiding unnecessary boomerang routing will require concerted collective action to advance Canadian network sovereignty (see below).</p>
                </div>
                <div class="title">
                    Why is network sovereignty important to Canadians?
                </div>
                <div class="content">
                    <p>Countries have long pursued the ideal of network sovereignty, or the ability to maintain effective control over the network infrastructures that are critical to economic and social well-being. Canada is no exception, most famously was its first government's backing the trans-continental railway, often referred to as Canada's “National Dream.” As new technologies emerged in the 20th century, major public investments contributed to trans-Canadian broadcasting, telecommunications and transportation networks. In each case these expensive ventures made little sense from a narrow economic perspective, but they were enacted with the explicit intention to better connect Canada's disparate regions in the face of strong US pulls. In the 21st century, while the pressures for north-south integration are as strong as ever, relatively fewer resources have been devoted to ensuring the integrity of Canadian internet infrastructure, which arguably has become as vital to contemporary life as any of the earlier networks. This has resulted in Canadian internet communications relying heavily on US infrastructure, both in terms of the physical location of cables and routers, but as well as on US internet service providers.</p>
                    <p>Sovereignty doesn't imply isolation, but rather also means the ability to forge relationships with other sovereign entities on the basis of equality. Here again, Canada relies heavily on US based internet infrastructure to reach third countries. With only two trans-oceanic fibre-optic cables landing on Canada's Atlantic coast, compared to 13 in the US, the great majority of Canada's internet communication with Europe passes through the US. Canada has no fibre optic cable landing on its Pacific coast, so all internet traffic with Asia involves US routing.</p>

                    <img src="/_assets/img/faq-submarine-map.png" width="100%" /><br />

                    <small>Credit: <a hred="http://www.submarinecablemap.com/" target="_blank">Telegraphy Submarine Cable Map</a></small>

                </div>
                <div class="title">
                    What can Canadians do to keep their data at home and promote network sovereignty?
                </div>
                <div class="content">
                    <p>Avoiding boomerang routing, and exercising network sovereignty more generally, mainly involves a strategy of 'data localization' at least for domestic communications. Here are some of the measures public policy makers can take to pursue this strategy:</p>
                    <ul>
                        <li>Develop domestic infrastructure by creating and promoting public internet exchange points (IXPs) where carriers can exchange traffic (i.e. peer) with each other at no cost. This would make it much more likely that Canada-to-Canada traffic stays within our borders, all while promoting more efficient routing. The Canadian Internet Registration Authority (CIRA) is already fostering the development of more Internet exchanges within Canada, for both economic and privacy reasons. For example, as seen in the peering table above, if Bell and Telus were to peer at the Toronto internet exchange (Torix), boomerang traffic would be greatly reduced.</li>
                        <li>Expand Canada's long-haul Internet backbone capacity, especially between public IXPs.</li>
                        <li>Ensure that government procurement policies give greater priority to all-Canadian routing and privacy protection. A relatively easy measure for public bodies is to require their ISP to peer at the IXPs in their operating regions.</li>
                        <li>Require greater transparency and accountability on the part of Canadian telecom carriers in terms of their internetwork routing practices, long-haul carriage capacity and utilization, and data-protection provisions in the contractual arrangements with transit providers.</li>
                    </ul>
                    <p>For international internet communications, network sovereignty would involve laying additional fibre-optic cable across both the Atlantic and Pacific oceans that more directly connect Canada with its communications partners in Europe, Asia and other regions. Public pressure will be necessary to change policy in this direction.</p>
                    <p>See also OpenMedia's <a href="https://openmedia.org/en/ixmaps-frequently-asked-questions" target="_blank">FAQ on Internet mapping</a>. References: Woodcock &amp; Edelman, 2012; Woodcock, 2016., Clement &amp; Obar, 2015.</p>
                </div>
            </div>
        </section>
    </div>
</section>


<section class="faq">
    <div class="content">
        <section class="faq-block">
            <h2 id="faq-issue-four">ISPs and their Privacy Transparency</h2>
            <div class="ui styled fluid accordion">
                <div class="title">
                    What personal information does my ISP have about me?
                </div>
                <div class="content">
                    <p>By necessity, all ISPs have access to basic information about their subscribers (e.g. name, address) as well as about their communication activity (who contacted, when) that needs to be retained at least as is required for service and billing purposes. ISPs also have access, at least briefly, to the content and metadata of any communication received from subscribers or other ISPs for transit. This means that every ISP along a traceroute can in principle share this data with third parties, such as signals intelligence agencies. However, beyond this, carriers are generally reluctant to say precisely what information they do have access to, how long they hold it, who they share it with and under what criteria. See: Christopher Parsons, 2014.</p>
                </div>
                <div class="title">
                    What legal responsibilities do ISPs have for protecting Canadians' personal information and communication?
                </div>
                <div class="content">
                    <p>In Canada there are two main privacy laws that give individuals important rights with regard to their internet activities: the <a href="https://en.wikipedia.org/wiki/Privacy_Act_(Canada)" target="_blank">Privacy Act</a>, which covers the federal government, and the <a href="https://en.wikipedia.org/wiki/Personal_Information_Protection_and_Electronic_Documents_Act" target="_blank">Personal Information Protection and Electronic Documents Act (PIPEDA)</a>, which covers commercial enterprises. Among other responsibilities, PIPEDA requires ISPs, with a few specific exceptions, to: </p>
                    <ul>
                        <li>Be accountable for how they handle personal information in their custody (Principle 1: Accountability)</li>
                        <li>Collect and use personal information only by consent and to the extent necessary for the purposes specified (Principles 2, 3 & 4: Identifying Purposes; Consent; Limiting Collection)</li>
                        <li>Make readily available to individuals specific information about its policies and practices relating to the management of personal information (Principle 8: Openness}</li>
                        <li>Facilitate individuals accessing their own records as well as challenging their accuracy and proper handling (Principle 9 &10: Individual Access, Challenging Compliance)</li>
                    </ul>
                    <p>Particularly relevant to internet communication, PIPEDA requires ISPs to not hand over personal information to another carrier, whether Canadian or foreign, unless it provides a level of protection  equivalent to that offered by PIPEDA. There is scant evidence that ISPs comply with this requirement, and good reason to suspect that they routinely violate this legal obligation.</p>
                </div>
                <div class="title">
                    Does my ISP being transparent about its privacy policies mean that it is protective of my privacy?
                </div>
                <div class="content">
                    <p>While there is no guarantee that an ISP which proactively reports on its information handling activities is also good at protecting the personal information in its custody, being transparent is a good sign that the ISP cares about individuals' privacy as well as its own reputation. This  also means it can be held more accountable for its practices. Unfortunately, many ISPs, and especially those carriers that provide transit services and hence not readily visible to internet users, appear to prefer being relatively opaque, and at best simply repeat the minimum requirements under law. This typically leaves their users in the dark about important questions such as: do they require a warrant when responding to law enforcement requests? will they notify you if they receive a request? do they treat your IP address as personal information? do they ship your personal information outside the privacy protection of your own country and expose it to foreign jurisdiction or surveillance? If ISPs felt more pressure to develop positive reputations, this would advance privacy protection in the internet industry.</p>
                </div>
                <div class="title">
                    What can I do to help make ISPs more privacy transparent and privacy protective?
                </div>
                <div class="content">
                    <p>As an individual internet user, you can compare the <a href="transparency/2014-report.php">privacy transparency of ISPs</a>, and where you have options, subscribe to one that performs better than your current ISP. It is also important to let your ISP know that you take your privacy seriously and expect it to do so as well. One way to do this is to take advantage of your access rights under law and request the personal information that your ISP has on you, <a href="https://accessmyinfo.org/" target="_blank">Access My Info (AMI)</a> offers an easy way to do this.</p>
                    <p>While individual actions can help make a difference, combining efforts magnifies your effectiveness. Consider supporting advocacy organizations that are already working to promote privacy and other human rights in the internet arena. For Canadian groups see the FAQ: What can I do to help make Canadian security agencies more democratically accountable?</p>
                </div>
            </div>
        </section>
    </div>
</section>

<?php include '../_includes/global-footer.php'; ?>

<script>
  $('.ui.accordion')
  .accordion();
  $('.youtube.video .ui.embed').embed({});
</script>
</body>
</html>
