"use strict";
var core_1 = require('@angular/core');
exports.DEFAULT_APP_CONFIG = {
    jwtKey: 'id_token',
    apiEndpoint: 'http://localhost:8080/'
};
exports.APP_CONFIG = new core_1.OpaqueToken('app.config');
