<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Glossary | IXmaps</title>
    <?php include '../_includes/global-head.php'; ?>
</head>

<body id="glossary-page">
<?php include '../_includes/global-navigation.php'; ?>

<header class="hero">
    <div class="content">
        <h1>Glossary</h1>
    </div>
</header>

<div class="content">
    <div id="glossary-holder">

        <div class="ui left internal rail">
            <div id="glossary-list" class="ui sticky">
                <ul>
                    <h6 class="list-header">Terms</h6>
                    <li><a href="#asn">Autonomous System Number</a></li>
                    <li><a href="#boomerang_routing">Boomerang Routing</a></li>
                    <li><a href="#collect_it_all">Collect It All</a></li>
                    <li><a href="#five_eyes">Five Eyes</a></li>
                    <li><a href="#geoprecision">Geoprecision</a></li>
                    <li><a href="#hop">Hop</a></li>
                    <li><a href="#hostname">Hostname</a></li>
                    <li><a href="#internet">Internet</a></li>
                    <li><a href="#isp">Internet Service Provider</a></li>
                    <li><a href="#internet_exchange">Internet Exchange</a></li>
                    <li><a href="#ip_address">IP Address</a></li>
                    <li><a href="#latency">Latency</a></li>
                    <li><a href="#metadata">Metadata</a></li>
                    <li><a href="#nsa">National Surviellance Agency</a></li>
                    <li><a href="#nsa_interception_facilities">NSA Interception Facilities</a></li>
                    <li><a href="#network_sovereignty">Network Sovereignty</a></li>
                    <li><a href="#packet">Packet</a></li>
                    <li><a href="#prism">Prism Surveillance Program</a></li>
                    <li><a href="#router">Router</a></li>
                    <li><a href="#traceroute">Traceroute</a></li>
                    <li><a href="#upstream_surveillance_programs">Upstream Surveillance Programs</a></li>
                </ul>
            </div>
        </div>

        <div id="glossary-entries">
            <dl>
                <dt id="#asn">Autonomous System Number (ASN)</dt>
                <dd>An Autonomous System Number (ASN) is a uniquely assigned number of an Autonomous System (AS), which is a collection of connected Internet Protocol (IP) routing prefixes under the control of network operator(s) with a common, clearly-defined, internet routing policy. ASNs are important because they uniquely identify each network and hence ISP/carrier on the Internet. For more, see Autonomous System</dd>

                <dt id="boomerang_routing">Boomerang Routing</dt>
                <dd>Boomerang routing refers to internet routing where a data path starts and ends in the same country (e.g. Canada) but passes through another country (e.g. the US) before returning. This is a common occurrence with Canadian internet communication.</dd>

                <dt id="collect_it_all">"Collect it all"</dt>
                <dd>In response to the 9/11 attacks, the NSA and its Five Eyes partners, adopted what NSA Director Gen. Keith Alexander called a "collect it all" approach to foreign and domestic surveillance, often without legal authority. This is reflected in both the Upstream as well as PRISM internet surveillance programs, as well as the bulk collection of personal information routinely produced in many other areas of everyday activity - banking, telephone calling, shopping, travelling, … . Video: “Collect It All: America’s Surveillance State Lines” Reference: Greenwald, 2013, 2014.</dd>

                <dt id="five_eyes">Five Eyes</dt>
                <dd>Five Eyes is an alliance for sharing intelligence between Australia, Canada, New Zealand, the United Kingdom and the United States based on the UKUSA multilateral cooperation agreement. For more, see Five Eyes</dd>

                <dt id="geoprecision">Geoprecision</dt>
                <dd>IXmaps uses the term geoprecision to describe the level of precision and accuracy in geolocating an IP address, i.e. pinpointing the physical location of its corresponding router. If geoprecision is to 'building level,' we are saying with some confidence that the router is located within a specific building. If geoprecision is to ‘city level,’ we are only confident that our geolocation is accurate to a city. If geoprecision is ‘maxmind,’ we are relying on Maxmind’s geolocation, which is often not reliable for core internet routers. WE encourage users who believe a router is not correctly located to Flag the router and suggest a more accurate location.</dd>

                <dt id="hop">Hop</dt>
                <dd>A hop represents one portion of the path between a communication source and its destination. As data is transmitted along a path it passes through routers and other devices. Each device passing data to the next constitutes a hop. For more, see hop</dd>

                <dt id="hostname">Hostname </dt>
                <dd>An internet hostname is a human-readable nickname that corresponds to the IP address of a device connected to a network (e.g. IXmaps.ca). Hostnames appear as a component in Uniform Resource Locators (URLs) for internet resources such as web sites (e.g. https://IXmaps.ca). For more, see hostname</dd>

                <dt id="internet">Internet</dt>
                <dd>The internet is the global system of interconnected computer networks that share common rules or protocols for linking devices worldwide, passing data between networks, and delivering it to the intended destinations. Mainly, the internet physically consists of high capacity fibreoptic cables connected to each other via routers located in internet switching centres or exchanges. For more, see Internet</dd>

                <dt id="isp">Internet Service Provider (ISP) or Carrier</dt>
                <dd>An internet service provider (ISP) or carrier, is a telecommunication company that offers various internet communications services, including access to the internet. ISPs, by necessity, have access to all the personal information they handle, and under Canadian law have privacy responsibilities. They are also subject to requests for access to this information from intelligence and law enforcement agencies, as well as other third parties such as copyright holders. For more, see internet service provider</dd>

                <dt id="internet_exchange">Internet Exchange or Switching Site</dt>
                <dd>An internet exchange or switching site is physical infrastructure through which ISPs or carriers exchange internet traffic between their networks. Typically located in large buildings in the centre of major cities, they are connected with other exchanges by high-speed fibre optic cables. They also provide connections for local internet services and subscribers. For more, see internet exchange point </dd>

                <dt id="ip_address">IP Address</dt>
                <dd>An Internet Protocol address (IP address) is a numerical label assigned to each device communicating on a computer network. IP addresses are used for interface identification and location addressing. They are often displayed as a series of numbers separated by a “.” or “:” (e.g. the IP address for the IXmaps.ca site is 128.100.72.189). For more, see IP address</dd>

                <dt id="latency">Latency</dt>
                <dd>In networks, latency refers to the length of time or delay, usually measured in milliseconds (ms), it takes for data to travel between two points in a network (including the internet). A low latency connection features short delay times, while a high latency connection suffers from long delays. Operating systems have software programs that measure latency, including ping and traceroute. Tracerouting programs often send multiple packets to the same IP address in an attempt to correct for random variations. Minimum latency refers to the length of time that the fastest packet took to reach a node and return. For more, see network latency</dd>

                <dt id="metadata">Metadata</dt>
                <dd>Literally ‘data about data,’ metadata is conventionally presented as ‘outside of the envelope’ information, such as the from, to, time and location of a communication, but can also effectively include anything that computers can derive from message content. Even in its basic form, metadata can be very revealing of sensitive aspects a person’s activities, so is highly valued by surveillance agencies making it controversial for civil liberties advocates. Reference: Clement, Harkness & Raine, 2016. For more, see metadata.</dd>

                <dt id="nsa">National Security Agency (NSA)</dt>
                <dd>The National Security Agency (NSA) is an intelligence organization of the United States government, responsible for global monitoring, collection, and processing of information and data for foreign intelligence and counterintelligence purposes, a discipline known as signals intelligence (SIGINT). NSA is concurrently charged with protection of U.S. government communications and information systems against penetration and network warfare. For more, see National Security Agency </dd>

                <dt id="nsa_interception_facilities">NSA interception facilities </dt>
                <dd>As part of its Upstream programs, the NSA has installed interception facilities in major internet exchanges across the U.S. as well as around the world. Technically, these consist of signal “splitters” spliced into fibre optic cables which replicate all traffic passing through the cable. This mirrored data is sent to deep packet inspection computers that examine the data and selectively route it back to NSA data centres for further analysis and storage. Where access to internet exchanges is not feasible, the NSA can intercept traffic along the cables connecting internet exchanges, even transoceanic submarine cables. Reference:  Klein, 2009, p.98; Bamford, 2008. See FAQs: What is NSA mass surveillance? How do we know where the NSA can intercept my data?</dd>

                <dt id="network_sovereignty">Network sovereignty</dt>
                <dd>Network sovereignty is the concept of national sovereignty applied to communications and other networks. It draws directly from the longstanding recognition that nation states have the right and duty to exercise superordinate control within their borders over all matters pertaining to the public good and to negotiate with other states on the basis of equality. In the internet context, it refers to the ability of a nation to exercise effective control over its own critical internet infrastructure. While it can serve a wide variety of national aims, when consistent with international human rights law and the integrity of the internet as a unified open global communication medium, network sovereignty can contribute to protecting privacy, promoting more efficient routing and producing economic benefits. Reference: Clement, 2017. For more, see network sovereignty</dd>

                <dt id="packet">Packet (or Data Packet)</dt>
                <dd>All internet communication involves packets; every web page you view arrives as a series of packets and every email you send leaves as a series of packets. A data packet is typically forwarded from one router to another in a series of "hops" through the networks that constitute the internet until it reaches its destination. In order to recreate the original message, packets are re-assembled at the destination. For more, see network packet</dd>

                <dt id="prism">PRISM surveillance program</dt>
                <dd>PRISM is a clandestine surveillance program under which the NSA collects internet communications from at least nine major U.S. internet companies–Microsoft, Yahoo, Google, Facebook, Paltalk, YouTube, Skype, AOL and Apple. For more, see PRISM</dd>

                <dt id="router">Router</dt>
                <dd>A router is a physical device that forwards data packets across and between computer networks. Routers direct traffic" on the internet. Each router belongs to a particular ISP or carrier, which assigns it a unique internet protocol (IP) address and often a hostname that identifies the type of router and its physical location. For more, see router</dd>

                <dt id="traceroute">Traceroute</dt>
                <dd>A traceroute is a measurement of the path and transit times of data traveling across the internet depicted as a series of hops from one router to the next. Traceroutes can be generated to particular destination internet protocol (IP) addresses or hostnames by software programs. IXmaps uses a modified version of this software to enable the traceroute data generated to be stored in the IXmaps database from where it can be mapped. For more, see traceroute</dd>

                <dt id="upstream_surveillance_programs">Upstream surveillance programs</dt>
                <dd>NSA upstream surveillance programs refer to the clandestine interception of communication traffic from the internet backbone– i.e. major internet switches or exchanges, and cables, while the data is in transit. Part of the NSA’s “collect it all’ surveillance approach, these programs enable the capture of all forms of internet communications -  e.g. emails, text chats, web searches, downloads, voice over IP (VoIP) calls (e.g. Skype), and even video chat sessions. The largest Upstream programs are Fairview (AT&T) and Stormbrew (Verizon). Upstream interception also plays a key role in the NSA’s Quantum Insert program, which can automatically implant spyware or other malware into potentially millions of targeted internet devices. Reference: Gallagher & Greenwald, 2014. For more, see upstream collection</dd>
            </dl>
        </div>
    </div>
</div>


<?php include '../_includes/global-footer.php'; ?>
<script src="/_assets/js/smooth-scroll.js"></script>
<script>
$('.ui.sticky')
  .sticky({
    context: '#glossary-entries'
  });
</script>

</body>
</html>
