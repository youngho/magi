"use strict";
var router_1 = require('@angular/router');
var singledut_component_1 = require("./singledut.component");
exports.moduleRoutes = [{
        path: '',
        component: singledut_component_1.SubBinComponent
    }];
exports.SubBinRouting = router_1.RouterModule.forChild(exports.moduleRoutes);
