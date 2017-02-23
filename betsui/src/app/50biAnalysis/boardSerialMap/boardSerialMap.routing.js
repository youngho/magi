"use strict";
var router_1 = require('@angular/router');
var boardSerialMap_component_1 = require("./boardSerialMap.component");
exports.moduleRoutes = [{
        path: '',
        component: boardSerialMap_component_1.YieldAbnormalComponent
    }];
exports.YieldAbnormalRouting = router_1.RouterModule.forChild(exports.moduleRoutes);
