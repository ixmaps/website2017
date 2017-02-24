<!-- SEARCH AREA -->
<section id="search-header">
    <div class="content">

        <!-- Search Tabs -->
        <div class="ui top attached tabular menu">
            <a class="item" data-tab="quick">Quick</a>
            <a class="item active" data-tab="basic">Basic</a>
            <a class="item" data-tab="advanced">Advanced</a>

            <div class="map-help">
                <button class="ui transparent button">Help
                    <i class="ui image"><img src="/_assets/img/icn-help.svg" alt="help"></i>
                </button>
            </div>
        </div>

        <!-- Tab 1 Contents: Quick Search -->
        <div class="ui bottom attached tab segment content" data-tab="quick">
            <h3 class="ui header text-center">Select a quick search to view traceroutes in the IXmaps database.</h3>

            <div class="input-holder">
                <div class="quick-input">
                    <button class="ui large fluid button qs-last-contributed-btn">
                        <i><img src="/_assets/img/quicksearch-contributed.svg" alt="" /></i><br />
                        Last Contributed
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button qs-via-nsa-city-btn">
                        <i><img src="/_assets/img/quicksearch-city.svg" alt="" /></i><br />
                        Via NSA City
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button qs-via-boomerangs-btn">
                        <i><img src="/_assets/img/quicksearch-boomerang.svg" alt="" /></i><br />
                        Boomerangs
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button qs-from-my-isp-btn">
                        <i><img src="/_assets/img/quicksearch-isp.svg" alt="" /></i><br />
                        From My ISP
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button qs-from-my-cty-btn">
                            <i><img src="/_assets/img/quicksearch-city.svg" alt="" /></i><br />
                            From My City
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button qs-from-my-country-btn">
                        <i><img src="/_assets/img/quicksearch-country.svg" alt="" /></i><br />
                        From My Country
                    </button>
                </div>
                <div class="ui searchsettings items">
                    <div class="item">
                        <p class="minor">
                            <strong>Search Query:</strong>
                            <span>Does Originate in AS number 814</span><br />
                            <a href="#">[ Refine in Advanced Search ]</a>
                        </p>

                        <div class="top aligned content">
                            <div class="ui right floated">
                                <a class="ui primary basic blue button">Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tab 2 Contents: Basic Search -->
        <div class="ui bottom attached tab segment active content" data-tab="basic">
            <h3 class="ui header text-center">Enter Search Terms to Find Traceroutes in the IXmaps Database</h3>
            <div class="basic input-holder">
                <a class="from basic-srch-itm" data-position="bottom left">
                    <div class="input-summary">
                        <div class="label">From</div>
                        <div>
                            –––
                            <i class="ui image right floated">
                                <img src="/_assets/img/icn-delete.svg" alt="delete">
                            </i>
                        </div>
                    </div>
                </a>

                <a class="via basic-srch-itm" data-position="bottom left">
                    <div class="input-summary">
                        <div class="label">VIA</div>
                        <div>
                            –––
                            <i class="ui image right floated">
                                <img src="/_assets/img/icn-delete.svg" alt="delete">
                            </i>
                        </div>
                    </div>
                </a>

                <a class="to basic-srch-itm" data-position="bottom left">
                    <div class="input-summary">
                        <div class="label">TO</div>
                        <div>
                            –––
                            <i class="ui image right floated">
                                <img src="/_assets/img/icn-delete.svg" alt="delete">
                            </i>
                        </div>
                    </div>
                </a>

                <div class="basic-srch-itm">
                    <button class="ui huge fluid red button submit-basic-search-btn">Search</button>
                </div>

                <div id="bs-originate-popup" class="ui from flowing inverted popup hidden" data-variation="wide">
                    <div class="ui inverted form">
                        <div class="inline field">
                            <label>Contributor</label>
                            <input data-constraint="contributor" type="text" placeholder="Contibutor">
                        </div>
                        <div class="inline field">
                            <label>ISP</label>
                            <input data-constraint="isp" type="text" placeholder="ISP">
                        </div>
                        <div class="inline field">
                            <label>City</label>
                            <input data-constraint="city" type="text" placeholder="City">
                        </div>
                        <div class="inline field">
                            <label>Country</label>
                            <input data-constraint="country" type="text" placeholder="Country">
                        </div>
                        <button class="ui primary blue right floated button">Save</button>
                    </div>
                </div>

                <div id="bs-via-popup" class="ui via flowing inverted popup hidden" data-variation="wide">
                    <div class="ui inverted form">
                        <div class="inline field">
                            <label>NSA</label>
                            <input data-constraint="NSA" type="text" placeholder="NSA">
                        </div>
                        <div class="inline field">
                            <label>ISP</label>
                            <input data-constraint="ISP" type="text" placeholder="ISP">
                        </div>
                        <div class="inline field">
                            <label>City</label>
                            <input data-constraint="city" type="text" placeholder="City">
                        </div>
                        <div class="inline field">
                            <label>Country</label>
                            <input data-constraint="country" type="text" placeholder="Country">
                        </div>
                        <button class="ui primary blue right floated button">Save</button>
                    </div>
                </div>

                <div id="bs-terminate-popup" class="ui to flowing inverted popup hidden" data-variation="wide">
                    <div class="ui inverted form">
                        <div class="inline field">
                            <label>Website</label>
                            <input data-constraint="destHostName" type="text" placeholder="Website">
                        </div>
                        <div class="inline field">
                            <label>ISP</label>
                            <input data-constraint="ISP" type="text" placeholder="ISP">
                        </div>
                        <div class="inline field">
                            <label>City</label>
                            <input data-constraint="city" type="text" placeholder="City">
                        </div>
                        <div class="inline field">
                            <label>Country</label>
                            <input data-constraint="country" type="text" placeholder="Country">
                        </div>
                        <button class="ui primary blue right floated button">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tab 3 Contents: Advanced Search -->
        <div class="ui bottom attached tab segment" data-tab="advanced">
            <h3 class="ui header">Construct a custom query to search the IXmaps database</h3>

            <div class="advanced input-holder">
                <!-- BOOLEAN -->
                <div class="advanced-input constraint-container constraint-boolean" data-constraint="boolean">
                    <!-- <select class="ui fluid dropdown">
                        <option value="does">Does</option>
                        <option value="doesNot">Does not</option>
                    </select> -->
                </div>

                <!-- POSITION -->
                <div class="advanced-input constraint-container constraint-position" data-constraint="position">
                    <!-- <select class="ui fluid dropdown">
                        <option value="originate">Originate in</option>
                        <option value="terminate">Terminate in</option>
                        <option value="goVia">Go Via</option>
                        <option value="contain">Contain</option>
                    </select> -->
                </div>

                <!-- KIND -->
                <div class="advanced-input constraint-container constraint-kind" data-constraint="kind">
<!--                     <select class="ui fluid dropdown">
                        <option value="submitter">Submitter Name</option>
                        <option value="zipCodeSubmitter">Submitter Postcode</option>
                        <option value="trId">Traceroute Id</option>
                        <option value="ipAddr">IP Address</option>
                        <option value="asnum">AS Number</option>
                        <option value="hostName">Hostname</option>
                        <option value="ISP">ISP/Carrier</option>
                        <option value="country">Country</option>
                        <option value="region">Province/State</option>
                        <option value="zipCode">Postcode</option>
                        <option value="city">City</option>
                        <option value="destHostName">Destination Hostname</option>
                    </select> -->
                </div>

                <!-- INPUT -->
                <div class="advanced-input constraint-container constraint-input" data-constraint="input">
<!--                     <div class="ui fluid input">
                        <input type="text" placeholder="Hostname">
                    </div> -->
                </div>

                <!-- JOIN -->
                <div class="advanced-input constraint-container constraint-join" data-constraint="join">
                    <!-- <select class="ui fluid dropdown">
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                    </select> -->
                </div>

                <div class="advanced-input constraint-buttons">
                    <!-- ADD -->
                    <button class="circular ui icon button">
                        <i class="icon settings"><img src="_assets/img/icn-add.svg" alt="add"></i>
                    </button>

                    <!-- DELETE -->
                    <button class="circular ui icon button">
                        <i class="icon settings"><img src="_assets/img/icn-remove.svg" alt="remove"></i>
                    </button>
                </div>
            </div>

            <div class="search-line">
                <hr />

                <button class="ui primary basic button ">
                    Settings
                </button>

                <button class="ui primary right floated button">
                    Search
                </button>

                <button class="ui secondary right floated button">
                    Clear
                </button>
            </div>
        </div>
    </div>
</section>