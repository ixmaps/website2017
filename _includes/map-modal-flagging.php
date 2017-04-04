<div class="ui flagging modal">
    <div class="header">
        <h5>Flag Router as Incorrect</h5>
        <i><img id="flagging-close-btn" class="ui image right floated" src="/_assets/img/icn-close.svg" alt=""></i>
    </div>

    <div id="ip-flags" class="ui-draggable- hidden- content">

        <div id="ip-flag-active"></div>
    
        <div id="ip-flag-info">
            <div>
                Traceroute: <span id="ip-flag-tr-id"></span>
                Hop: <span id="ip-flag-router"></span>
                <br/>
                IP address: <span id="ip-flag-ip-address"></span>
                <br/>
                Hostname: <span id="ip-flag-hostname"></span>
                <br/>
                <div>
                    <span id="ip-flag-location"></span>
                    (<span id="ip-flag-lat-long"></span>)
                </div>

                <div style="clear:both"></div>

                <div>  
                    <span id="ip-flag-asn-name"></span>
                    <span id="ip-flag-star-rating"></span>
                </div>
                <div style="clear:both"></div>

                <div id="ip-flag-gl-override"></div>
            </div>
        </div>
        <div id="ip-flags-legend">
          If you believe this router is incorrectly located, please so indicate, offering a more accurate location if possible. Note that since excluding User-flagged routers is enabled by default, the next time this route is mapped, this router will not appear. To see it again, turn off the Exclude router / User-flagged control in Options (the gear icon), then refresh the query.
        </div>
        <div id="ip-flag-insert">
            <input id="user_nick" class="ip-flag-input" type="text" placeholder="Username" style="width: 200px;"/>
            <input id="ip_new_loc" class="ip-flag-input" type="text" placeholder="Suggested Location" style="width: 200px;"/>
            <input id="user_msg" class="ip-flag-input" type="text" placeholder="Additional Comments..." style="width: 200px;"/>
            <br/>
            <input type="button" id="submit-ip-flag" value="Submit" onclick="saveIpFlag()" class="ui centered blue button"/>
        </div>
        <div id="ip-flags-data" class="hidden">
            <h6>Previous Flagging Reports</h6>
            <div id="ip-flags-data-list"></div>
        </div>
    </div>
    
</div>