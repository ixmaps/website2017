<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contribute | IXmaps</title>
    <link href="/_assets/css/contribute.css" rel="stylesheet">
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

    <p>Contributing data involves installing traceroute generating software built by the IXmaps development team. It initiates traceroute requests from your location either at batches of pre-selected target sites, or at individual hostnames (like URLs) of your choosing. You can view the traceroutes you and others have contributed via the <a href="map.php" class="link">Map page.</a></p>

    <p>To ensure the anonymity of contributors, we do not store the IP address of your personal device, but only a truncated version, with the last quad zeroed out. eg. 127.123.123.0. To verify this and any other features of this software, check out our free and open source code on GitHub.</p>

    <p>You should be aware that in order to work effectively, the traceroute generation software needs access to low-level (e.g. "socket layer") functions of your computer. Read carefully the ReadMe document that comes with the download package before installing and running the software. See our Privacy page, for more on how we anonymize your IP address and protect your privacy.</p>

    <h3>Installing and running the IXmaps Client</h3>

    <p>IXmapsClient works on <strong>Windows</strong>, <strong>Mac OS X</strong>, and <strong>Linux</strong>.</p>

        <h5>Windows</h5><a class="dl-btn" href="https://www.ixmaps.ca/IXmapsClient/IXmapsClient.1.0.6.win64.exe">Download</a>
        <div style="clear:both"></div>
        This version of the software runs on Windows 7, Windows 8 and Windows 10.
        <ul class="nobullet">
          <li><a href="https://www.ixmaps.ca/IXmapsClient/IXmapsClient.1.0.6.win64.exe">Download the <strong>IXmapsClient</strong> installer IXmapsClient.1.0.6.win64.exe</a></li>
          <li>Double click on <strong>IXmapsClient.1.0.6.win64.exe</strong> and install the application in the directory <strong>C:\IXmapsClient</strong></li>
          <li>Copy the <strong>IXmapsClient-Shortcut</strong> to your Desktop</li>
          <li>In order to allow the <strong>IXmapsClient</strong> to run properly, you may need to authorize <strong>Windows Firewall</strong> to allow inbound connections. For a detailed guide on how to change these settings, see section on <strong>Changing Windows Firewall Settings</strong></li>
          <li>Double click on <strong>IXmapsClient-Shortcut</strong> to launch</li>
        </ul>
        <strong>IXmapsClient</strong> needs to be executed in a terminal with administrator's privileges. For this reason, when double clicking <strong>IXmapsClient-Shortcut</strong>, a new terminal window will be opened asking permission to run the application as an administrator; enter your admin password to proceed. The <strong>IXmapsClient</strong> interface should appear in your browser, or use your browser to go http://localhost:2040/.</p>

        <strong>Changing Windows Firewall Settings</strong>
        <p>In order to allow the <strong>IXmapsClient</strong> to collect traceroute data, Windows users may have to change the configuration of the <strong>Windows Firewall</strong>, which by default prevents the PC from receiving inbound connections. To change these default settings follow these steps:</p>
        <ul class="nobullet">
          <li>In <strong>Control Panel</strong>, open the <strong>Windows Firewall</strong> application and click on Advance Settings</li>
          <li>Click on <strong>Windows Firewall Properties</strong></li>
          <li>Click on the tab <strong>Private Profile</strong> and in the section <strong>Inbound Connections</strong>, select the option <strong>Allow</strong> from the dropdown menu</li>
          <li>Click on the tab <strong>Public Profile</strong> and in the section <strong>Inbound Connections</strong>, select the option <strong>Allow</strong> from the dropdown menu</li>
          <li>Finally, click the button <strong>Apply</strong> and close the <strong>Windows Firewall</strong></li>
          <!-- TODO: update this link -->
          <li>More detailed instructions are <a href="https://docs.microsoft.com/en-us/intune/deploy-use/help-protect-windows-pcs-using-windows-firewall-policies-in-microsoft-intune" target="_blank">available here</a></li>
          <li>Note: We advise that you reset your default firewall settings once you have completed traceroute collection.</li>
        </ul>

        <strong>Removing IXmapsClient</strong>
        <ul class="nobullet">
          <li>Delete the <strong>C:\IXmapsClient</strong> directory</li>
          <li>Delete the <strong>IXmapsClient-Shortcut</strong> from your <strong>Desktop</strong></li>
          <li>This will completely remove the <strong>IXmapsClient</strong> from your computer.</li>
        </ul>

        <br />

        <h5>Mac OSX</h5><a class="dl-btn" href="https://www.ixmaps.ca/IXmapsClient/IXmapsClient_v.1.0.6.macos.dmg">Download</a>
        <div style="clear:both"></div>
        <ul class="nobullet">
          <li><a href="https://www.ixmaps.ca/IXmapsClient/IXmapsClient_v.1.0.6.macos.dmg">Download the <strong>IXmapsClient</strong> installer <strong>IXmapsClient_v.1.0.6.macos.dmg</strong></a></li>
          <li>Double click on the <strong>IXmapsClient.1.0.6.macos.dmg</strong> to open it</li>
          <li>Drag the <strong>IXmapsClient.app</strong> application to your <strong>Applications</strong> folder</li>
          <li>Double click on <strong>IXmapsClient.app</strong> to launch</li>
        </ul>

        <p>Depending on your Security &amp; Privacy settings, OS X may disallow installation of the <strong>IXmapsClient</strong>. This is part of OS X called “Gatekeeper.” To adjust these settings please open <strong>Apple menu > System Preferences… > Security &amp; Privacy > General tab</strong> and under the header <strong>"Allow applications downloaded from"</strong> select <strong>Anywhere.</strong></p>
        <p><strong>IXmapsClient</strong> needs to be executed in a terminal with administrator's privileges. For this reason, when double clicking <strong>IXmapsClient.app</strong>, a new terminal window will be opened asking for the administrator's password; enter your admin password to proceed. The <strong>IXmapsClient</strong> interface should then be shown in a new browser window, or use your browser to go http://localhost:2040/.</p>

        <strong>Removing IXmapsClient</strong>
        <p>Move the <strong>IXmapsClient.app</strong> application from your <strong>Applications</strong> folder to the Trash. This will completely remove the IXmaps Client from your computer</p>

        <br />

        <h5>Linux</h5><a class="dl-btn" href="https://www.ixmaps.ca/IXmapsClient/IXmapsClient.1.0.6.linux.tar.gz">Download</a>
        <div style="clear:both"></div>
        <ul class="nobullet">
          <li><a href="https://www.ixmaps.ca/IXmapsClient/IXmapsClient.1.0.6.linux.tar.gz">Download the <strong>IXmapsClient</strong> installer <strong>IXmapsClient.1.0.6.linux.tar.gz</strong></a></li>
          <li>Extract the contents of the file <strong>IXmapsClient.1.0.6.linux.tar.gz</strong>, e.g. by running the following command in a terminal window: tar xzvf IXmapsClient.1.0.6.linux.tar.gz</li>
          <li>Run <strong>start.sh</strong> to launch</li>
        </ul>
        <p><strong>IXmapsClient</strong> needs to be executed in a terminal with administrator's privileges. For this reason, when executing <strong>IXmapsClient</strong>, a new terminal window will be opened asking for the administrator's password; enter your admin password to proceed. The <strong>IXmapsClient</strong> interface should then be shown in a new browser window, or use your browser to go http://localhost:2040/.</p>

        <strong>Removing IXmapsClient</strong>
        <p>Delete the <strong>IXmapsClient</strong> folder. In a Linux terminal window, navigate to the directory where <strong>IXmapsClient</strong> resides, then you run the following command:
        rm -r IXmapsClient
        This will completely remove the <strong>IXmapsClient</strong> from your computer.</p>

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
