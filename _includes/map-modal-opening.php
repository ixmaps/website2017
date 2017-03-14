<div class="ui opening modal">
    <i><img id="opening-close-btn" class="ui image right floated" src="/_assets/img/icn-close.svg" alt=""></i>
    <div id="my-location-status"></div>
    <div class="content">
        <div class="ui large form">
            <div class="inline fields">
                <span class="userloc-ipsetting-title">Your current IP address is <strong><span class="userloc-ip"></span></strong></span><br>
            </div>
        </div>
        <div class="ui large form">
            <div class="inline fields">
                <span class="setting-title">You appear to be near &emsp;</span>
                <div class="field">
                    <input class="userloc-text-input userloc-city ui-autocomplete-input" autocomplete="off"/>
                </div>
                <div class="field">
                    <input class="userloc-text-input userloc-country ui-autocomplete-input" autocomplete="off">
                </div>
            </div>
        </div>

        <div class="ui large form">
            <div class="inline fields">
                <span class="setting-title">Your internet service provider (ISP) is &emsp;</span>
                <div class="field">
                    <span class="userloc-isp"></span> (ASN: <span class="userloc-asn"></span>)
                </div>
                <!-- <div class="field">
                    <input type="text" placeholder="xxx">
                </div> -->
            </div>
        </div>
    </div>

    <div class="description">
        <div class="ui divider"></div>
        <div class="ui accordion">
            <div class="title">
                <p class="minor">
                    Please review and correct as needed. <strong class="link">Find this creepy?</strong>
                </p>
            </div>

            <div class="content" style="text-align: left; background: #FFF;">
                <p class="minor">Every website you visit, and all the carriers along the way, needs the IP address of your device to transmit your data and return content. Using commonly available IP address lookup services, any of these can determine your approximate location. These service providers can also capture your communications, and are largely unfettered in using it for their own purposes. They can also secretly hand it over to third parties, including law enforcement and security agencies. With IXmaps, we only use your IP address only to produce these maps and then anonymize it. For more, see our privacy policy.</p>
            </div>
        </div>
        <div class="ui hidden compact divider"></div>
        <div id="myloc-submit-btn" class="ui massive centered blue button">GO TO MAP</div>
    </div>
</div>