<div id="tr-details-modal" class="ui traceroutes modal">
    <div class="header">
        <h5>Traceroute Details</h5>
        <i><img id="tr-details-close-btn" class="ui image right floated" src="/_assets/img/icn-close.svg" alt="" /></i>
    </div>

    <div class="body">
        <div class="tr-metadata-container">
            <div class="tr-metadata">
                Traceroute # <strong><span class="tr-id" /></strong><br />
                Contributed by <strong><span class="submitter" /></strong>
                on <strong><strong><span class="sub-time" /></strong></strong><br />
                From <strong><span class="zip-code" /></strong><br />
                To <strong><span class="destination" /></strong>
                <strong><span class="dest-ip more-details hidden" /></strong>
                <strong><span class="terminated more-details hidden" /></strong>
            </div>

            <div class="tr-metadata-more-details more-details hidden">
                <table class="ui table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ASNum</th>
                            <th>ASName</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- created in gmaps.js -->
                    </tbody>
                </table>
            </div>
        </div>

        <div style="clear: both;"></div>
        <div class="more-details-btn link">More details...</div>
        <div style="clear: both;"></div>

        <div class="traceroute-container">
            <table class="ui table">
                <thead>
                    <tr>
                        <th>Hop #</th>
                        <th>Location</th>
                        <th>Carrier</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- created in gmaps.js -->
                </tbody>
            </table>
        </div>

        <div class="traceroute-container-more-details hidden">
            <table class="ui table">
                <thead>
                    <tr>
                        <th>Hop</th>
                        <th>IP</th>
                        <th>Hostname</th>
                        <th>ASnum</th>
                        <th>Latencies</th>
                        <th>Lat</th>
                        <th>Long</th>
                        <th>Geocorrection</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- created in gmaps.js -->
                </tbody>
            </table>
        </div>
    </div>
</div>