<div class="results">
    <header class="header-results">
        <p><strong><span id="tot-results"></span></strong> Traceroutes Found <br />
            <!-- <em>Displaying X of Y most recent search results</em> -->
        </p>
        <div id="filter-results-summary"></div>
    </header><!-- /header -->

    <div class="traceroutes-results">
        <h6>Traceroutes</h6>
        <button id="add-all-trs-btn" class="ui compact transparent basic right floated yellow button">Map All</button>
        <button id="remove-all-trs-btn" class="ui compact transparent basic right floated yellow button">Hide All</button>
        <div class="ui compact hidden divider"></div>
    </div>

    <table id="traceroutes-table" class="ui tablesorter selectable celled compact table"">
        <thead><tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>TR ID</th>
        </tr></thead>

        <tbody>

        </tbody>
    </table>

    <div class="carriers-results">
        <div class="ui divider"></div>
        <h6>Carriers</h6>
    </div>

    <table id="carrier-table" class="ui tablesorter selectable celled compact table">
        <thead><tr>
            <th>Carrier</th>
            <th>Nat.</th>
            <th>Routers</th>
            <th>Transparency</th>
        </tr></thead>

        <tbody>
            <tr class="carrier">
                <td><div class="carrier-colour shaw"></div>Shaw</td>
                <td><i class="canada flag"></i></td>
                <td>4</td>
                <td>
                    <div class="ui mini star rating" data-rating="2" data-max-rating="10""></div>
                </td>
            </tr>

            <tr class="carrier">
                <td><div class="carrier-colour rogers"></div>Rogers</td>
                <td><i class="canada flag"></i></td>
                <td>2</td>
                <td><div class="ui mini star rating" data-rating="3" data-max-rating="10"></div></td>
            </tr>

            <tr class="carrier">
                <td><div class="carrier-colour bell"></div>Bell</td>
                <td><i class="canada flag"></i></td>
                <td>6</td>
                <td><div class="ui mini star rating" data-rating="4" data-max-rating="10"></div></td>
            </tr>

        </tbody>
    </table>
</div>