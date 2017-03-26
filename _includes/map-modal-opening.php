<div class="ui opening modal">
    <i><img id="opening-close-btn" class="ui image right floated" src="/_assets/img/icn-close.svg" alt=""></i>
    <div id="my-location-status"></div>
    <div class="content">
        
        <span class="ui-helper-hidden-accessible"><input type="text"/></span>
        
        <div class="ui large form">
            
            <!-- This is redundant  -->
            <!-- <div id="myloc-skip-btn" class="ui centered button" style="float: right;">
                Skip
            </div> -->
            <div >
                <strong>Let’s start</strong> by finding routes you or others near you have contributed to the IXmaps database.
            </div>

            <div class="ui divider"></div>

            <div style="float: right; text-align: center;">
                <strong>Routes found in<br/> IXmaps database</strong>
            </div>

            <div class="inline fields"></div>

        </div>
    
        <div class="ui large form">
            <div class="inline fields">
                <span class="userloc-ipsetting-title">Your current IP address is <strong><span class="userloc-ip"></span></strong></span><br>
            </div>
        </div>

        <div class="ui large form">
            <div class="field user-loc-chkbox">
                <strong><span class="userloc-submitter-tot">0</span></strong>
                <input type="checkbox" class="userloc-submitter-chkbox">
            </div>
            <div class="inline fields">
                <span class="setting-title">Your Contributor Name&emsp;</span>
                <div class="field">
                    <strong><input class="userloc-text-input userloc-submitter ui-autocomplete-input" autocomplete="off"/></strong>
                </div>

            </div>
        </div>
        
        <div class="ui large form">
            <div class="field user-loc-chkbox">
                <strong><span class="userloc-asn-tot">0</span></strong>
                <input type="checkbox" class="userloc-asn-chkbox">
            </div>
            <div class="inline fields">
                <span class="setting-title">Your internet service provider (ISP),&emsp;</span>
                <div class="field">
                    <strong><span class="userloc-isp"></span> (ASN: <span class="userloc-asn"></span>)</strong>
                </div>
            </div>        

            <div class="field user-loc-chkbox">
                    <strong><span class="userloc-city-tot">0</span></strong>
                    <input type="checkbox" class="userloc-city-chkbox">
            </div>
            <div class="inline fields">
                <span class="setting-title">You appear to be near&emsp;</span>
                <div class="field">
                    <strong><input class="userloc-text-input userloc-city ui-autocomplete-input" autocomplete="off"/></strong>
                </div>
            </div>

            <div class="field user-loc-chkbox">
                <strong><span class="userloc-country-tot">0</span></strong>
                <input type="checkbox" class="userloc-country-chkbox">
            </div>
            <div class="inline fields">
                <span class="setting-title">In &emsp;</span>
                <div class="field">
                    <strong><input class="userloc-text-input userloc-country ui-autocomplete-input" autocomplete="off" style="width:70px"></strong>
                </div>
                <div class="field">
                    <span><i class="userloc-country-flag"></i></span>
                    <strong> (<span class="userloc-country-name"></span>) </strong>
                </div>
            </div>

            <div class="field user-loc-chkbox">
                <strong><span class="userloc-trs-tot">0</span></strong>
            </div>

            <div class="inline fields">
                <div class="field" style="padding-top: 16px; height: 40px;">
                    <strong><span class="setting-title">
                    Number of routes found that meet all the above conditions&emsp;</span></strong>
                    
                    <!-- This is inacurate -->
                    <!-- <span>To increase the number of routes found, replace city by a larger one nearby.</span> -->

                </div>

            </div>

        </div>

        <div class="description">
            <div class="ui accordion">
                <div id="myloc-reload-btn" class="ui centered button" style="float: right;">
                        RELOAD
                </div>
                <div class="title" style="text-align: left;">
                    <p class="minor">
                        <strong class="link">Find this creepy?</strong>
                    </p>
                </div>

                <div class="content" style="text-align: left; background: #FFF;">
                    <p class="minor">Every website you visit, and all the carriers along the way, needs the IP address of your device to transmit your data and return content. Using commonly available IP address lookup services, any of these can determine your approximate location. These service providers can also capture your communications, and are largely unfettered in using it for their own purposes. They can also secretly hand it over to third parties, including law enforcement and security agencies. With IXmaps, we only use your IP address only to produce these maps and then anonymize it. For more, see our privacy policy.</p>
                </div>
            </div>
            <div class="ui divider"></div>
            <div class="ui hidden compact divider"></div>
            <div id="myloc-contribute-btn" class="ui massive centered button" style="float: left;">
                CONTRIBUTE NEW ROUTES
            </div>
            <div id="myloc-submit-btn" class="ui massive centered button">
                MAP ROUTES FOUND
            </div>

        </div>
    </div>


</div>