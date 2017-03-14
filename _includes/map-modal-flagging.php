<div class="ui flagging modal">
    <div class="header">
        <h5>Flag Router as Incorrect</h5>
        <i><img class="ui image right floated" src="/_assets/img/icn-close.svg" alt=""></i>
    </div>

    <div id="ip-flags-" class="ui-draggable- hidden- content">

        <div id="ip-flag-active"></div>
    
        <div id="ip-flag-info">
            <div>
                Traceroute: <span id="ip-flag-tr-id"></span>
                Router: <span id="ip-flag-router"></span>
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
                <!-- <div id="ip-flag-ip-address"></div> -->
            </div>
        </div>
        <div id="ip-flags-legend">
          If you believe this router is incorrectly located, please so indicate, offering a more accurate location if possible. Note that since excluding User-flagged routers is enabled by default, the next time this route is mapped, this router will not appear. To see it again, turn off the Exclude router / User-flagged control in Options (the gear icon), then refresh the query.
        </div>
        <div id="ip-flag-insert">
            <input id="user_nick" type="text" placeholder="Username"/>
            <input id="ip_new_loc" type="text" placeholder="Suggested Location"/>
            <input id="user_msg" type="text" placeholder="Additional Comments..."/>
            <input type="button" id="submit-ip-flag" value="Submit" onclick="saveIpFlag()" class="ui massive centered blue button"/>
        </div>
        <div id="ip-flags-data" class="hidden">
            <h6>Previous Flagging Reports</h6>
            <div id="ip-flags-data-list"></div>
        </div>
    </div>
    
</div>