<div id="tr-details-modal" class="ui traceroutes modal">
    <div class="header">
        <h5>Traceroute Details</h5>
        <i><img id="tr-details-close-btn" class="ui image right floated" src="/_assets/img/icn-close.svg" alt="" /></i>
    </div>

    <div class="body">
        <div class="tr-metadata-container">
            <p>
                [TR details is under active development. We welcome any <a href="https://www.github.com/ixmaps/website2017/issues" target="_blank">functionality suggestions</a>]
            </p>
            <p>
                Traceroute # <strong><span class="tr-id" /></strong><br />
                Contributed by <strong><span class="submitter" /></strong>
                on <strong><strong><span class="sub-time" /></strong></strong><br />
                From <strong><span class="zip-code" /></strong><br />
                To <strong><span class="destination" /></strong>
                <strong><span class="dest-ip more-details hidden" /></strong>
                <strong><span class="terminated more-details hidden" /></strong>
            </p>
        </div>

        <div class="more-details-btn link">More details...</div>

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
                        <th>Latency</th>
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