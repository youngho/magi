"use strict";
var router_1 = require('@angular/router');
var testEfficiency_component_1 = require("./testEfficiency.component");
exports.moduleRoutes = [{
        path: '',
        component: testEfficiency_component_1.ProgramRevisionComponent
    }];
exports.ProgramRevisionRouting = router_1.RouterModule.forChild(exports.moduleRoutes);
