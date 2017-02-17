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
                    <button class="ui large fluid button">
                        <i><img src="/_assets/img/quicksearch-contributed.svg" alt="" /></i><br />
                        Last Contributed
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button">
                        <i><img src="/_assets/img/quicksearch-city.svg" alt="" /></i><br />
                        Via NSA City
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button">
                        <i><img src="/_assets/img/quicksearch-boomerang.svg" alt="" /></i><br />
                        Boomerangs
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button">
                        <i><img src="/_assets/img/quicksearch-isp.svg" alt="" /></i><br />
                        From My ISP
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button">
                            <i><img src="/_assets/img/quicksearch-city.svg" alt="" /></i><br />
                            From My City
                    </button>
                </div>
                <div class="quick-input">
                    <button class="ui large fluid button">
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
                            <button class="ui huge fluid red button">Search</button>
                        </div>

                        <div class="ui from flowing inverted popup hidden" data-variation="wide">
                            <div class="ui inverted form">
                                <div class="inline field">
                                    <label>Contibutor</label>
                                    <input type="text" placeholder="Contibutor">
                                </div>
                                <div class="inline field">
                                    <label>ISP</label>
                                    <input type="text" placeholder="ISP">
                                </div>
                                <div class="inline field">
                                    <label>City</label>
                                    <input type="text" placeholder="City">
                                </div>
                                <div class="inline field">
                                    <label>Country</label>
                                    <input type="text" placeholder="Country">
                                </div>
                                <button class="ui primary blue right floated button">Save</button>
                            </div>
                        </div>

                        <div class="ui via flowing inverted popup hidden" data-variation="wide">
                            <div class="ui inverted form">
                                <div class="inline field">
                                    <label>NSA</label>
                                    <input type="text" placeholder="NSA">
                                </div>
                                <div class="inline field">
                                    <label>ISP</label>
                                    <input type="text" placeholder="ISP">
                                </div>
                                <div class="inline field">
                                    <label>City</label>
                                    <input type="text" placeholder="City">
                                </div>
                                <div class="inline field">
                                    <label>Country</label>
                                    <input type="text" placeholder="Country">
                                </div>
                                <button class="ui primary blue right floated button">Save</button>
                            </div>
                        </div>

                        <div class="ui to flowing inverted popup hidden" data-variation="wide">
                            <div class="ui inverted form">
                                <div class="inline field">
                                    <label>Website</label>
                                    <input type="text" placeholder="Website">
                                </div>
                                <div class="inline field">
                                    <label>ISP</label>
                                    <input type="text" placeholder="ISP">
                                </div>
                                <div class="inline field">
                                    <label>City</label>
                                    <input type="text" placeholder="City">
                                </div>
                                <div class="inline field">
                                    <label>Country</label>
                                    <input type="text" placeholder="Country">
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

                        <!-- Does Not -->
                        <div class="advanced-input constraint-does">
                            <select class="ui fluid dropdown">
                                <option value="does">Does</option>
                                <option value="doesNot">Does not</option>
                            </select>
                        </div>

                        <!-- Terminate -->
                        <div class="advanced-input constraint-rule">
                            <select class="ui fluid dropdown">
                                <option value="originate">Originate in</option>
                                <option value="terminate">Terminate in</option>
                                <option value="goVia">Go Via</option>
                                <option value="contain">Contain</option>
                            </select>
                        </div>


                        <!-- Destination -->
                        <div class="advanced-input constraint-property">
                            <select class="ui fluid dropdown">
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
                            </select>
                        </div>

                        <!-- Input -->
                        <div class="advanced-input constraint-value">
                            <div class="ui fluid input">
                                <input type="text" placeholder="Hostname">
                            </div>
                        </div>

                        <!-- And -->
                        <div class="advanced-input constraint-boolean">
                            <select class="ui fluid dropdown">
                                <option value="AND">AND</option>
                                <option value="OR">OR</option>
                            </select>
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
                        <hr>

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
        </div>
    </div>
</section>