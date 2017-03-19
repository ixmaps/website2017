<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contribute | IXmaps</title>
    <?php include '_includes/global-head.php'; ?>
</head>

<body id="contribute-page">
<?php include '_includes/global-navigation.php'; ?>

<header class="hero">
    <div class="content">
        <h1>Contribute</h1>
    </div>
</header>

<div class="content">

<article>
    <h2>Contributing to the IXmaps database anonymously</h2>
    <p>IXmaps relies on voluntary contributions of anonymized traceroute data. We invite you to join over 600 other contributors who have helped to grow the database to well over 170,000 traceroutes. The more distinct the originating points, in terms of both city and ISP, and the more varied the destination targets, the better able we are to display interesting internet routings.</p>

    <p>Contributing data involves installing traceroute generating software built by the IXmaps development team. It initiates traceroute requests from your location either at batches of pre-selected target sites, or at individual hostnames (like URLs) of your choosing. You can view the traceroutes you and others have contributed via the Map page.</p>

    <p>To ensure the anonymity of contributors, we do not store the IP address of your personal device, but only a truncated version, with the last quad zeroed out. eg. 127.123.123.0. To verify this and any other features of this software, check out our free and open source code on GitHub.</p>

    <p>You should be aware that in order to work effectively, the traceroute generation software needs access to low-level (e.g. "socket layer") functions of your computer. Read carefully the ReadMe document that comes with the download package before installing and running the software. See our Privacy page, for more on how we anonymize your IP address and protect your privacy.</p>

    <h3>Installing and running the IXmaps Client</h3>
    <p>IXmaps currently offers two versions of traceroute generation software: TRgen for most Windows operating systems, and the newer IXmapsClient for most MacOSX and Linux operating systems. We currently do not offer IXmapsClient for Android, iOS, Windows or Windows Phone.</p>

    <h4>System requirements</h4>
    <ul>
        <li>Intel processor</li>
        <li>1GB of RAM</li>
    </ul>

    <h4>Installation Instructions</h4>
    <h5>Mac OSX</h5>
    <ul>
        <li>Download the installer - IXmapsClient_v.1.0.4.dmg and follow the instructions in the ReadMe file. You will need administrator privileges to run and install the software. You may also need to adjust your privacy and security settings to allow installing applications downloaded from the internet.</li>
        <li>(Requires Mac OSX v10.6 or higher - tested on 10.6.8, 10.7.5, 10.8, 10.10)</li>
    </ul>
    <h5>Linux</h5>
    <p>Download the installer - IXmapsClient_linux_v.1.0.1.zip and follow the instructions in the ReadMe file. You will need administrator privileges to run and install the software.</p>

    <h5>Windows</h5>
    <p>To install (an older) version of our traceroute generator (TrGen), download the Windows installer from here and follow the instructions in the ReadMe file. You will not need administrator privileges to run the software once installed, but you may need to be logged into an administrator account to install it. (We welcome help from those with Windows installation experience in creating a Windows package for the latest version of IXmaps Client software.)</p>
</article>

<article>
    <div class="ui divider"></div>
    <h2>Other welcome contributions</h2>

    <h3>Correcting the location of routers</h3>
    <p>Locating accurately the individual routers that switch data packets along the way to their destination is challenging. You may find when examining traceroutes displayed on the Map page that some routers appear out of place, sometimes even wildly. We invite you to use the Flag option to point these out and suggest more accurate locations for the IP addresses of such routers so we can correct it later. This can be done by clicking on the routers (dots) or hops (lines), and then the appropriate Flag button. Any information you provide about why you think the router location is inaccurate, and where it is more likely to be, is helpful in making corrections. See our FAQ page for more on geolocation.</p>

    <h3>Improving our software</h3>
    <p>While we do our best to ensure that our software operates reliably and safely, and is easy to use, this is not a polished, high-end application, but rather the latest product of a on-going, unevenly funded research project. If you encounter difficulties or see obvious areas for improvement, please be patient and let us know what needs to be improved. Or better, if you have the skills, make the improvements yourself! The code used for gathering traceroutes, as well as the code for the website and various related components, is free and open source, and available from our GitHub repositories.</p>
    <p>We welcome all feedback (critical and appreciative), technical inquiries or offers for assistance regarding IXmaps software, database, or website. Please email the IXmaps team.</p>
    <div class="ui hidden section divider"></div>
</article>

</div>

<?php include '_includes/global-footer.php'; ?>
</body>
</html>
