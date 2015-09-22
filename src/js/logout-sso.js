/*
 * Copyright 2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */
/**
 * @typedef {Object} LogoutConfig
 * @property {String} endpoint The Haven OnDemand API endpoint (eg: https://api.havenondemand.com)
 */
/**
 * Script for logging the user out of Haven OnDemand. The combined token is obtained from the "token" query parameter,
 * and the HOD endpoint is taken from a JSON script tag. The JSON should have the {@link LogoutConfig} type.
 */
(function() {
    // captures the value of the first token parameter
    // the token parameter is preceded by ? or &, and the value will not contain &
    // match returns the whole string as [0] and the captured group as [1]
    var encodedToken = location.search.match(/[?&]token=([^&]+)/)[1];

    var CONFIG = JSON.parse(document.getElementById('config-json').textContent);

    window.havenOnDemandSso.logout(function() {}, {
        combinedToken: decodeURIComponent(encodedToken),
        hodEndpoint: CONFIG.endpoint
    });
})();