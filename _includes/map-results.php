<div class="results">
    <div id="filter-results-empty"></div>
    <div id="filter-results-content" class="hidden">
        <header class="header-results">
            <div>
                <strong><span id="tot-results-found"></span></strong> Traceroutes Found <br />
                <em>Displaying <span id="tr-count"></span> of a sample of <span id="tot-results"></span> search results</em>
                <!-- most recent search results -->
            </div>
            <div id="filter-results-summary-container">Search results details...</div>
            <div id="filter-results-summary" class="hidden"></div>
        </header><!-- /header -->

        <div class="traceroutes-results">
            <h6>Traceroutes</h6>
            <button id="add-all-trs-btn" class="ui compact transparent basic right floated yellow button">Map All</button>
            <button id="remove-all-trs-btn" class="ui compact transparent basic right floated yellow button">Hide All</button>
            <div class="ui compact hidden divider"></div>
        </div>
        <div id="traceroutes-results-table" class=""></div>

        <div class="carriers-results">
            <div class="ui divider"></div>
            <h6 title="Listed below are all the carriers/ISPs involved in the currently mapped routes, along with their privacy transparency scores. The colour codes correspond to the traceroute hops (lines) and routers (dots) under the control of the corresponding carrier.">Carriers</h6>
        </div>
        <div id="carriers-results-table" class=""></div>

    </div>
</div>